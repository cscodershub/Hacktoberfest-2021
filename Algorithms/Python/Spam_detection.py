#SPAM SMS DETECTION using scikit learn, textblob and numpy!
import matplotlib.pyplot as plt
import csv
from textblob import TextBlob
import pandas
import sklearn
import pickle
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC, LinearSVC
from sklearn.metrics import classification_report, f1_score, accuracy_score, confusion_matrix
from sklearn.pipeline import Pipeline
from sklearn.model_selection import GridSearchCV, StratifiedKFold, cross_val_score, train_test_split, learning_curve 
from sklearn.tree import DecisionTreeClassifier 

def split_into_tokens(message):
    return TextBlob(message).words

def split_into_lemmas(message):
    message = message.lower()
    words = TextBlob(message).words
    # for each word, take its "base form" = lemma 
    return [word.lemma for word in words]
    
def plot_learning_curve(estimator, title, X, y, ylim=None, cv=None,
                        n_jobs=-1, train_sizes=np.linspace(.1, 1.0, 5)):
    """
    Generate a simple plot of the test and traning learning curve.
    Parameters
    ----------
    estimator : object type that implements the "fit" and "predict" methods
        An object of that type which is cloned for each validation.
    title : string
        Title for the chart.
    X : array-like, shape (n_samples, n_features)
        Training vector, where n_samples is the number of samples and
        n_features is the number of features.
    y : array-like, shape (n_samples) or (n_samples, n_features), optional
        Target relative to X for classification or regression;
        None for unsupervised learning.
    ylim : tuple, shape (ymin, ymax), optional
        Defines minimum and maximum yvalues plotted.
    cv : integer, cross-validation generator, optional
        If an integer is passed, it is the number of folds (defaults to 3).
        Specific cross-validation objects can be passed, see
        sklearn.cross_validation module for the list of possible objects
    n_jobs : integer, optional
        Number of jobs to run in parallel (default 1).
    """
    plt.figure()
    plt.title(title)
    if ylim is not None:
        plt.ylim(*ylim)
    plt.xlabel("Training examples")
    plt.ylabel("Score")
    train_sizes, train_scores, test_scores = learning_curve(
        estimator, X, y, cv=cv, n_jobs=n_jobs, train_sizes=train_sizes)
    train_scores_mean = np.mean(train_scores, axis=1)
    train_scores_std = np.std(train_scores, axis=1)
    test_scores_mean = np.mean(test_scores, axis=1)
    test_scores_std = np.std(test_scores, axis=1)
    plt.grid()

    plt.fill_between(train_sizes, train_scores_mean - train_scores_std,
                     train_scores_mean + train_scores_std, alpha=0.1,
                     color="r")
    plt.fill_between(train_sizes, test_scores_mean - test_scores_std,
                     test_scores_mean + test_scores_std, alpha=0.1, color="g")
    plt.plot(train_sizes, train_scores_mean, 'o-', color="r",
             label="Training score")
    plt.plot(train_sizes, test_scores_mean, 'o-', color="g",
             label="Cross-validation score")

    plt.legend(loc="best")
    return plt

if __name__ == '__main__':
	print('# Read Data Set')
	# read message dataset
	messages = pandas.read_csv('SMSSpamCollection', sep='\t', quoting=csv.QUOTE_NONE,
							   names=["label", "message"])

	# Split data set
	print('# Data set:')

	msg_train, msg_test, label_train, label_test = \
		train_test_split(messages['message'], messages['label'], test_size=0.2)

	print('Training data: {}, Test data: {}, Total: {}'.format(len(msg_train), len(msg_test), len(msg_train) + len(msg_test)))
	
	# Bayes
	print('# Using Naive Bayes : \n')

	pipeline = Pipeline([
		('bow', CountVectorizer(analyzer=split_into_lemmas)),  # strings to token integer counts
		('tfidf', TfidfTransformer()),  # integer counts to weighted TF-IDF scores
		('classifier', MultinomialNB()),  # train on TF-IDF vectors w/ Naive Bayes classifier
	])

	params = {
    'tfidf__use_idf': (True, False),
    'bow__analyzer': (split_into_lemmas, split_into_tokens),
	}

	grid = GridSearchCV(
		pipeline,  # pipeline from above
		params,  # parameters to tune via cross validation
		refit=True,  # fit using all available data at the end, on the best found param combination
		n_jobs=-1,  # number of cores to use for parallelization; -1 for "all cores"
		scoring='accuracy',  # what score are we optimizing?
		cv=StratifiedKFold(n_splits=5),  # what type of cross validation to use
	)
	
	nb_detector = grid.fit(msg_train, label_train)
	predictions = nb_detector.predict(msg_test)
	print('Confusion Matrix: \n')
	print(confusion_matrix(label_test, predictions))
	print(classification_report(label_test, predictions))
	
	# SVM
	print('# Using SVM : \n')
	pipeline_svm = Pipeline([
    ('bow', CountVectorizer(analyzer=split_into_lemmas)),
    ('tfidf', TfidfTransformer()),
    ('classifier', SVC()),  # <== change here
	])

	# pipeline parameters to automatically explore and tune
	param_svm = [
	  {'classifier__C': [1, 10, 100, 1000], 'classifier__kernel': ['linear']},
	  {'classifier__C': [1, 10, 100, 1000], 'classifier__gamma': [0.001, 0.0001], 'classifier__kernel': ['rbf']},
	]
	grid_svm = GridSearchCV(
		pipeline_svm,  # pipeline from above
		param_grid=param_svm,  # parameters to tune via cross validation
		refit=True,  # fit using all data, on the best detected classifier
		n_jobs=-1,  # number of cores to use for parallelization; -1 for "all cores"
		scoring='accuracy',  # what score are we optimizing?
		cv=StratifiedKFold(n_splits=5),  # what type of cross validation to use
	)
	svm_detector = grid_svm.fit(msg_train, label_train) # find the best combination from param_svm
	print('Confusion Matrix : \n')
	print(confusion_matrix(label_test, svm_detector.predict(msg_test)))
	print(classification_report(label_test, svm_detector.predict(msg_test)))
	#plotGraf = plot_learning_curve(pipeline, "accuracy vs. training set size", msg_train, label_train, cv=5)
	#plotGraf.show()
