function InstacartFirebaseUI(container, ui) {
  this.ui = ui;
  this.$container = $(container);
  this.container = container;

  this.$firebaseContainer = this.$container.children('.firebase-ui-container');
  this.$errorContainer = this.$container.children('.firebase-error-container');
  if (this.$errorContainer.length === 0) {
    this.$errorContainer = $("<div class='firebase-error-container'></div>");
    this.$container.append(this.$errorContainer);
  }
  if (this.$firebaseContainer.length === 0) {
    this.$firebaseContainer = $("<div class='firebase-ui-container'></div>");
    this.$container.append(this.$firebaseContainer);
  }
}

InstacartFirebaseUI.prototype.signInSuccessful = function(currentUser) {
  var that = this;
  currentUser.getIdToken().then(function (assertion) {
    var url = that.$container.data('firebase-signin-verification-url');
    var postData = {
      provider: currentUser.providerData[0].providerId,
      assertion: assertion,
    };
    $.post(url, postData)
      .done(function (loginResponse) {
        that.$errorContainer.empty();
        if (loginResponse.error) {
          that.$errorContainer.append($("<p class='error'>" + loginResponse.error + '</p>'));
          that.setup();
        } else {
          location.href = loginResponse.redirect_to;
        }
      })
      .fail(function (loginResponse) {
        that.$errorContainer.empty();
        that.$errorContainer.append($("<p class='error'>" + loginResponse.error + '</p>'));
        that.setup();
      });
  });
}

InstacartFirebaseUI.prototype.uiConfig = function() {
  var that = this;
  var countryCode = gon.countryConfig ? gon.countryConfig.code : 'US';
  return {
    callbacks: {
      signInSuccess: function (currentUser) {
        that.signInSuccessful(currentUser);
        return false;
      },
    },
    signInFlow: 'popup',
    signInOptions: [
      {
        provider: window.firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        defaultCountry: countryCode,
      },
    ],
  };
}

InstacartFirebaseUI.prototype.setup = function() {
  this.ui.reset();
  this.ui.start(this.$firebaseContainer[0], this.uiConfig());
}

function initFirebaseUI() {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new window.firebaseui.auth.AuthUI(window.firebase.auth());

  $(function () {
    $('[data-firebase-signin]').each(function () {
      var instacartFirebaseUI = new InstacartFirebaseUI(this, ui);
      instacartFirebaseUI.setup();
    });
  });
}

function initFirebase() {
  window.firebase.initializeApp(window.gon.firebaseShopperConfig);
  if ('firebaseui' in window) {
    initFirebaseUI();
  } else {
    $('#firebase-ui-sdk').on('load', initFirebaseUI);
  }
}

if ('firebase' in window) {
  initFirebase();
} else {
  $('#firebase-sdk').on('load', initFirebase);
}
;
