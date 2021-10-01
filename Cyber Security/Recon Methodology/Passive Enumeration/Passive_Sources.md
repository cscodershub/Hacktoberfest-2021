# Passive Sources

### What is passive subdomain enumeration?

Passive subdomain enumeration is a technique to query passive DNS datasets provided by sources \([Security trails](https://securitytrails.com/), [Censys](https://censys.io/), [Shodan](https://www.shodan.io/), [Binaryedge](https://www.binaryedge.io/), [Virus total](https://www.virustotal.com/gui/)\) to obtain the subdomains of a particular target.


It's highly recommended to read [this](https://app.gitbook.com/@sidxparab/s/subdomain-enumeration-guide/introduction/prequisites#what-is-passive-dns-data) first, before proceeding further.


### What tools to use?

* There are in total around 58 passive DNS sources that we can query\([list](https://gist.github.com/sidxparab/22c54fd0b64492b6ae3224db8c706228)\). It's difficult to manually query these third-party services. Thus, various tools are developed which do this work on our behalf.
* We can also scrape the data from the Internet Archives.
* Organizations host their source code on Github; as well as security researchers post their recon data which may contain subdomains of our target.   

1. **Passive DNS gathering tools**
   * [Amass](https://github.com/OWASP/Amass)
   * [Subfinder](https://github.com/projectdiscovery/subfinder)
   * [Assetfinder](https://github.com/tomnomnom/assetfinder)
   * [Findomain](https://github.com/Findomain/Findomain)
2. **Internet Archive**
   * [gau-plus](https://github.com/bp0lr/gauplus)
   * [waybackurls](https://github.com/tomnomnom/waybackurls)
3. **Github Scraping**
   * [github-subdomains](https://github.com/gwen001/github-subdomains)
4. **The Rapid7 Project Sonar**
   * [Crobat](https://github.com/Cgboal/SonarSearch)



## A\) Passive DNS gathering tools 

### 1\) [Amass](https://github.com/OWASP/Amass)

* Author: [OWASP](https://github.com/OWASP) \(mainly [caffix](https://github.com/caffix)\).
* Language: Go
* Total Passive Sources: **58**  

**Amass** is a Swiss army knife for subdomains enumeration that outperforms passive enumeration the best. This is because it queries the most number of third-party services which results in more subdomains of a particular target. [These](https://gist.github.com/sidxparab/e625a264322e4c9db3c3f1844b4a00b6) are sources that amass queries.

### Configuring amass:

* Since amass written in Go, you need your Go environment properly set up. \([Steps](https://gist.github.com/sidxparab/e3856c5e27b8a9b27b5b4911eb9e4ae6) to setup Go environment\)

**Installation:**

```bash
go get -v github.com/OWASP/Amass/v3/...
```

**Setting up Amass config file:**

* \*\*\*\*[**Link**](https://gist.github.com/sidxparab/4cd40d6e2f9422a005b06f19919200d0) to my amass config file for reference.
* By default, amass config file is located at `$HOME/.config/amass/config.ini` 
* Amass uses API keys mentioned in the config to query the third-party passive DNS sources.
* There are in total **18 services** on which you can signup and assign yourself with a free API key that will be used to query the large datasets.

{% hint style="info" %}
Check ****[**this** ](https://dhiyaneshgeek.github.io/bug/bounty/2020/02/06/recon-with-me/)article on how to create API keys
{% endhint %}

* Now let's set up our API keys in the `config.ini`config file.
* Open the config file in a text editor and then uncomment the required lines and add your API keys
* Refer to my config file\(this is exactly how your amass config file should be\). 

```php
# https://otx.alienvault.com (Free)
[data_sources.AlienVault]
[data_sources.AlienVault.Credentials]
apikey = dca0d4d692a6fd757107333d43d5f284f9a38f245d267b1cd72b4c5c6d5c31

#How to Add 2 API keys for a single service

# https://app.binaryedge.com (Free)
[data_sources.BinaryEdge]
ttl = 10080
[data_sources.BinaryEdge.account1]
apikey = d749e0d3-ff9e-gcd0-a913-b5e62f6f216a
[data_sources.BinaryEdge.account2]
apikey = afdb97ff-t65e-r47f-bba7-c51dc5d83347
```

### **Running Amass:**

* After setting up API keys now we are good to run amass. 

```bash
amass enum -passive -d example.com -config config.ini -o output.txt
```

**Flags:-**

* **enum** - Perform DNS enumeration
* **passive** - passively collect information through the data sources mentioned in the config file.
* **config** - Specify the location of your config file \(default: `$HOME/.config/amass/config.ini` \)
* **o** - Output filename

  ****🧙♂ **Tip**:- After configuring your config file in order to verify whether the API keys have been correctly set up or not you can use this command:-

```bash
amass enum -list -config config.ini
```

### 

### 2\) [Subfinder](https://github.com/projectdiscovery/subfinder)

* Author: [projectdiscovery](https://github.com/projectdiscovery)
* Language: Go
* Total Passive Sources: **32**

**Subfinder** tool provides the most number of subdomains compared to any other tool 🚀 . After all, it's been developed by the great [ProjectDiscovery](https://projectdiscovery.io/) team on whose tools most security researchers depend upon. So, by setting up API keys will definitely provide you more subdomains. Simply, the best.

### Configuring Subfinder: ⚙ 

**Installation:**

```bash
GO111MODULE=on go get -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder
```

**Setting up Subfinder config file:**  

* Subfinder's default config file location is at `$HOME/.config/subfinder/config.yaml` 
* When you install subfinder for the first time the config file doesn't get generated, hence you should run `subfinder -h` command to get it generated.
* For subfinder you can obtain free API keys by signing up on 18 Passive DNS sources. \(here the list of sources\)
* The subfinder config file follows YAML\(YAML Ain't Markup Language\) syntax. So, you need to be careful that you don't break the syntax. It's better that you use a text editor and set up syntax highlighting. 

**Example config file:-**

* [**Link** ](https://gist.github.com/sidxparab/e981c813f4ad057ed080a75a7fe00f4e)to my subfinder config file for reference.
* Some passive sources like `Censys` , `PassiveTotal` have 2 keys like APP-Id & Secret. For such sources, both values need to be mentioned with a colon\(:\) in between them. _\(Check how have I mentioned the "Censys" source values- `APP-id`:`Secret` in the below example \)_
* Subfinder automatically detects its config file only if at the default position. 

```yaml
securitytrails: []
censys:
  - ac244e2f-b635-4581-878a-33f4e79a2c13:dd510d6e-1b6e-4655-83f6-f347b363def9
shodan:
  - AAAAClP1bJJSRMEYJazgwhJKrggRwKA
github:
  - d23a554bbc1aabb208c9acfbd2dd41ce7fc9db39
  - asdsd54bbc1aabb208c9acfbd2dd41ce7fc9db39
passivetotal:
  - sample-email@user.com:sample_password
```

{% hint style="info" %}
\*\*\*\*🧙♂ **Tip:-** You can verify your YAML config file syntax on [yamllint.com](http://www.yamllint.com/)
{% endhint %}

### **Running Subfinder:**

```bash
subfinder -d example.com -all -config config.yaml -o output.txt
```

**Flags:-**

* **d** - Specify our target domain
* **all** - Use all passive sources \(slow enumeration but more results\)
* **config** - Config file location

{% hint style="info" %}
🧙♂ **Tip:-** To view the sources that require API keys `subfinder -ls` command
{% endhint %}

### \*\*\*\*

### **3\)** [**Assetfinder**](https://github.com/tomnomnom/assetfinder)\*\*\*\*

* Author:  [tomnomnom](https://github.com/tomnomnom)
* Language: Go
* Total passive sources: **9**

Don't know why did I include this tool😂just because its build by the legend [Tomnomnom](https://twitter.com/TomNomNom) ?  It doesn't give any unique subdomains compared to other tools but it's extremely fast.

```bash
go get -u github.com/tomnomnom/assetfinder
```

**Running:**

```bash
assetfinder --subs-only example.com > output.txt
```

### 

### 4\) [Findomain](https://github.com/Findomain/Findomain)

* Author: [Edu4rdSHL](https://github.com/Edu4rdSHL)
* Language: Rust
* Total Passive sources: 16

**Findomain** is one of the standard subdomain finder tools in the industry. Another extremely fast enumeration tool. Has a paid version that offers much more features like subdomain monitoring, resolution, less resource consumption. 

### Configuring Findomain: ⚙ 

**Installation:-**

* Depending on your architecture download binary from [here](https://github.com/Findomain/Findomain/wiki/Installation#using-upstream-precompiled-binaries)

```bash
wget -N -c https://github.com/Findomain/Findomain/releases/latest/download/findomain-armv7
mv findomain-armv7 /usr/local/bin/findomain
```

**Configuration:-**

* You need to define API keys in your `.bashrc` or `.zshrc` .
*  Findomain will pick up them automatically. 

```bash
export findomain_virustotal_token="API_KEY"
export findomain_spyse_token="API_KEY"
export findomain_fb_token="API_KEY"
```

### **Running Findomain:**

```bash
findomain -t example.com -u output.txt
```


**Flags:-**

* **t** - target domain
* **u** output file

## B\) Internet Archives

Internet Archives are web crawlers and indexing systems that crawl each website on the internet. Hence, they have historical data of any website that once existed. These can be a useful source to grab subdomains of a particular target that once existed and perform permutations on them to get more valid subdomains.

Internet Archive when queried gives back URLs.Since we are only concerned with the subdomains, we need to process those URLs to grab only unique subdomains from them.  

For this, we use a tool called [unfurl](https://github.com/tomnomnom/unfurl). When given URLs through `stdin` along with the "domain" flag, it extracts the domain part from them.

### 5\) [Gauplus](https://github.com/bp0lr/gauplus)

* Author: [bpl0r](https://github.com/bp0lr)
* Language: Go
* Sources:
  *  [web.archive.org](http://web.archive.org/)
  * [index.commoncrawl.org](http://index.commoncrawl.org/)
  * [otx.alienvault.com](https://otx.alienvault.com/)

Gauplus extracts data from internet crawling services. I prefer Gauplus than the original [gau](https://github.com/lc/gau) as sometimes it returns more results, as well as execution, completes faster than the original one.

#### Installation:

```bash
GO111MODULE=on go get -u -v github.com/bp0lr/gauplus
```

#### Running gauplus:

```bash
 gauplus -t 5 -random-agent -subs example.com |  unfurl -u domains | anew output.txt
```

**Flags:**

* **t** - threads
* **random-agent** - use random agents while querying 
* **subs** -  include subdomains of the target domain

### **6\)** [**Waybackurls**](https://github.com/tomnomnom/waybackurls)\*\*\*\*

* Author: [bpl0r](https://github.com/bp0lr)
* Language: Go
* Sources:
  *  [web.archive.org](http://web.archive.org/)
  * [index.commoncrawl.org](http://index.commoncrawl.org/)
  * \*\*\*\*[www.virustotal.com](https://www.virustotal.com)

Waybackurls returns some unique data that gauplus/gau couldn't find as the sources are different. Hence, we need to include waybackurls in our arsenal.

#### Installation:

```bash
go get github.com/tomnomnom/waybackurls
```

####  **Running Waybackurls:**

```bash
waybackurls example.com |  unfurl -u domains | sort -u output.txt
```



## C\) Github Scraping

### 7\) [Github-subdomains](https://github.com/gwen001/github-subdomains)

* Author: [gwen001](https://github.com/gwen001)
* Language: Go

 ****Its often seen that organizations host their source on GitHub. Also, various security researchers host their recon data in public repositories. Github-subdomains tool helps to extract subdomains of your target from github.

**Installation:**

```bash
go get -u github.com/gwen001/github-subdomains
```

**Configuring github-subdomains​​:** ⚙ 

* For github-subdomains to scrap domains from GitHub you need to specify a list of github access tokens.
* [Here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) is an article on how to make these access tokens.
* These access tokens are used by the tool to perform searches and find data on behalf of you.
* I always prefer that you make at least 10 tokens from 3 different accounts\(30 in total\) to avoid rate limiting. 
* Specify 1 token per line.

**Running github-subdomains:**

```bash
github-subdomains -d example.com -t tokens.txt -o output.txt
```

**Flags:**

* **d -** target
* **t** - file containing tokens
* **o** - output file

## **D\)** Rapid7 Project Sonar dataset

[Project Sonar](https://opendata.rapid7.com/about/) is a security research project by Rapid7 that conducts internet-wide scans. Rapid7 has been generous and made this data freely available to the public. Project Sonar contains [12 different datasets](https://opendata.rapid7.com/) with a total size of over **45.6 TB** which are updated on a regular basis. You can read here how you can parse these datasets on your own using this [guide](https://0xpatrik.com/project-sonar-guide/). 

So this internet-wide DNS dataset could be an excellent resource for us to grab our subdomains right? But querying such large datasets could take up significant time. That's when **Crobat** comes to the rescue.

### 8\) [Crobat](https://github.com/Cgboal/SonarSearch)

* Author: [Cgboal](https://github.com/Cgboal)
* Language: Go

[Cgboal ](https://twitter.com/CalumBoal)has done an excellent work of parsing and indexing the whole Rapid7 Sonar dataset into MongoDB and creating an API to query this database. This Crobat API is freely available at [https://sonar.omnisint.io/](https://sonar.omnisint.io/).More over he developed a command-line tool that uses this API and returns the results at a blazing fast speed.

### Installation:

```bash
go get github.com/cgboal/sonarsearch/crobat
```

### Running:

```bash
crobat -s example.com > output.txt
```

**Flags:**

* **s** - Target Name

## \*\*\*\*🏁**That's it !!! Done with passive things** 🏁 


