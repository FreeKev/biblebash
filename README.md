# Bible
A simple shell for searching, reading, and studying scripture.

[Hosted on Heroku:](https://biblebash.herokuapp.com/ "BibleBash")
* New Feature: For memorization work, click the searched passage to see the first letter of every word

## Screenshots
### Prototypical Unix [Bash] Pun
![Image of Menu](https://freekev.github.io/assets/BBCLI.png)
### Simple Home Screen - Verse Layout
![Image of Menu](https://freekev.github.io/assets/BB2Simp.png)
### Extended Chapter Reading
![Image of Menu](https://freekev.github.io/assets/BB2Greek.png)
### Keyword Search  
![Image of Menu](https://freekev.github.io/assets/BB2Search.png)

## Technologies Used
* HTML
* CSS
* Javascript
* MongoDB
* Express
* Node
* React
* Semantic UI

## Approach Taken
* Researched available APIs
* Chose API and managed available scripture interaction
* Set up front-end queries
* Organized returned query data
  - Styled simple layout bible reading
  - Styled Columns
* Created search-bar with keyword and passage ability
  - Running multiple API calls simultaneously
* Created translation options
* Styled all with Semantic UI
  - Modified inputs, menus, images, etc.

## Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /auth/me/from/token | Checks if token is present on browser refresh

## Issues
* Biblia API
  - JSON data returns only large block of text for chapters, so unwieldy
  - Otherwise returns raw HTML, without html-tag class names (hard to style/manipulate)
  - Linking text reference to commentary reference, therefore, also unwieldy
* Semantic UI
  - Nav Menu on mobile is stackable, but needs accordion option
* Search bar
  - Needs post route in order to use chromium omnibox feature

## More?
* Different API  
  - Recently given permissions for ESV et al
* Save your comments / read other's (now only temporary)
* Clickable passage references
* ~~First-letter toggle~~ (Done!)
  - For memorization, clicking on scripture text displays only first letter of every word
* Audio for reading / cantillation
* Search Greek Old Testament(LXX) / New Testament(GNT) simultaneously
* Create API for commentary
