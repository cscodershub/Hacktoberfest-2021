# Scraping\(JS/Source code\)

## Source Code Recon

JavaScript files are used by modern web applications to provide dynamic content which contains various functions & events. Each website includes JS files and are a great resource for finding those internal subdomains used by the organization.

## Tools: 🛠 

### 1\) [Gospider](https://github.com/jaeles-project/gospider)

* **Author**: [Jaeles](https://github.com/jaeles-project)
* **Language**: Go

[**Gospider**](https://github.com/jaeles-project/gospider) is a fast web spidering tool capable of crawling the whole website within in a short amount of time. This means gospider will visit/scrap each and every URL mentioned in the JS file and source code. So, since source code & JS files make up a website they may contain links to other subdomains too. 

### Installation:

```bash
go get -u github.com/jaeles-project/gospider
```

**This is a long process so Brace yourself !!!** 💪

### Running:

This process is divided into3⃣steps:

### 1\) Web probing subdomains

* Since we are crawling a website, gospider excepts us to provide URL's, which means in the form of `http://`  `https://` 
* So first, we need to web probe all the subdomains we have gathered till now. For this purpose, we will use [**httpx**](https://github.com/projectdiscovery/httpx) .
* So, lets first web probe the subdomains:

```bash
cat subdomains.txt | httpx -random-agent -retries 2 -no-color -o probed_tmp_scrap.txt
```

* Now, that we have web probed URLs, we can send them for crawling to gospider.

```bash
gospider -S probed_tmp_scrap.txt --js -t 50 -d 3 --sitemap --robots -w -r > gospider.txt
```

{% hint style="danger" %}
**Caution**: This generates huge traffic on your target 
{% endhint %}

#### Flags:

* **S** - Input file
* **js** - Find links in JavaScript files
* **t** -  Number of threads \(Run sites in parallel\) \(default 1\)
* **d** - depth \(3 depth means scrap links from second-level JS files\)
* **sitemap** -  Try to crawl sitemap.xml
* **robots** - Try to crawl robots.txt

![](../.gitbook/assets/gospider.png)

### 2\) Cleaning the output

> The parth portion of an URL shouldn't have more than 2048 characters. Since, we gopsider 
>
> ```bash
> sed -i '/^.\{2048\}./d' gospider.txt
> ```

 The Point to note here is we have got URLs from JS files & source code till now. We are only concerned with subdomains. Hence we must just extract subdomains from the Gospider output.

This can be done using Tomnomnom's [**unfurl**](https://github.com/tomnomnom/unfurl) tool. It takes a list of URLs as input and extracts the subdomain/domain part from them.  
You can install **Unfurl** using this command `go get -u github.com/tomnomnom/unfurl` 

```bash
cat gospider.txt | grep -Eo 'https?://[^ ]+' | sed 's/]$//' | unfurl -u domains | grep ".example.com$" | sort -u scrap_subs.txt
```

**Break down of the command:**  
**a\)** grep - Extract the links that start with http/https  
**b\)** sed -  Remove " \] " at the end of line  
**c\)** unfurl - Extract domain/subdomain from the urls  
**d\)** grep - Only select subdomains of our target  
**e\)** sort - Avoid duplicates

### 3\) Resolving our target subdomains

* Now that we have all the subdomains of our target, it's time to DNS resolve and check for valid subdomains.

\( hoping you have seen the previous techniques, and you know how to run puredns\)

```bash
puredns resolve scrap_subs.txt -w scrap_subs_resolved.txt -r resolvers.txt 
```



![](../.gitbook/assets/copy-of-copy-of-copy-of-webscraping_meme.png)
