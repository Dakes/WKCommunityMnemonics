# WKCommunityMnemonics
This script allows WaniKani members to contribute their own mnemonics which appear on any page that includes item info.

It was created by Samuel Harbord, but has not received any updates by him since 2015-03-12.  
So I decided that I will take on the challenge to bring this into a usable state once again.  

I guess this is his GitHub profile: https://github.com/Flashfyre  
And here the original on GreasyFork: https://greasyfork.org/en/scripts/7954-wk-community-mnemonics  
Original Community Post: https://community.wanikani.com/t/userscript-community-mnemonics-v0978/7367

## Latest Changelog
### 0.9.8.1:
- User mnemonics are displayed in sandboxed iframes
- moved to separate copy of spreadsheet, to prevent mixing of Mnemonics with users from older, insecure versions. 
  (https://docs.google.com/spreadsheets/d/1GR1D7irVwBMnjJeMK1GwZ5K4hqXz0i5SpQaWmS3EphM)
- Changed Google App Script for insert into Spreadsheet: Added regex to replace all HTML tags except the ones, used for highlighting. Also added it to GitHub. 
- The Spreadsheet is also read only, making the insert script the only way for data to enter the Spreadsheet. 

### 0.9.8:
- Now works on every site, it was originally meant to work on: + the item site outside the review. 

### 0.9.7.9: 
- Applied fixes by TellowKrinkle from the WaniKani community: https://community.wanikani.com/t/userscript-community-mnemonics-v0978/7367/139
- Fixed the infamous "c" user bug


## TODO
First 4 points shamelessly copied of irrelephant from the WaniKani Community:  https://community.wanikani.com/t/userscript-community-mnemonics-v0978/7367/128  

- Replace html tags for highlighting with custom Markdown similar markup Syntax. 
- Add proper sanitization directly after user entered a new Mnemonic. 
- Optional, later: build a small tool that lets people bulk export their notes so that I can import them to the existing data set.  
- Also optional: have a small statistic somewhere that lists users and the votes that they received on their mnemonics, 
so that people would be motivated to contribute and so that we can thank them for putting in the effort.
- Look for "Database" alternative for Google spreadsheets.   
- Let people claim ownership of Mnemonics by user "c" (caused by bug) (Hopefully there is no one actually called c, lol)
- Split everything into multiple easier understandable smaller files. 
- fix update message (Or remove update Dialog completely)
- Replace Tabletop by something a little less deprecated

## Buglist
- Left and right button overlap in lesson CRM
- Sometimes wrong Mnemonic is displayed