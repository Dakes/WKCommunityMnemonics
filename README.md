# WKCommunityMnemonics
This script allows WaniKani members to contribute their own mnemonics which appear on any page that includes item info.

It was created by Samuel Harbord, but has not received any updates by him since 2015-03-12.  
So I decided that I will take on the challenge to bring this into a usable state once again.  

I guess this is his GitHub profile: https://github.com/Flashfyre  
And here the original on GreasyFork: https://greasyfork.org/en/scripts/7954-wk-community-mnemonics  
Original Community Post: https://community.wanikani.com/t/userscript-community-mnemonics-v0978/7367

## Latest Changelog
### 0.9.8:
- Now works on every site, it was originally meant to work on: + the item site outside the review. 

### 0.9.7.9: 
- Applied fixes by TellowKrinkle from the WaniKani community: https://community.wanikani.com/t/userscript-community-mnemonics-v0978/7367/139
- Fixed the infamous "c" user bug


## TODO
First 4 points shamelessly copied of irrelephant from the WaniKani Community:  https://community.wanikani.com/t/userscript-community-mnemonics-v0978/7367/128  

- Sanitize data to avoid XSS attacks as mentioned by above. There is already some of that logic in place to do this, 
I would probably just do that again before showing the data (in case someone had modified it directly in the Google doc)  
- Optional, later: build a small tool that lets people bulk export their notes so that I can import them to the existing data set.  
- Also optional: have a small statistic somewhere that lists users and the votes that they received on their mnemonics, 
so that people would be motivated to contribute and so that we can thank them for putting in the effort.
- Look for "Database" alternative for Google spreadsheets.   
- Let people claim ownership of Mnemonics by user "c" (caused by bug) (Hopefully there is no one actually called c, lol)
- Split everything into multiple easier understandable smaller files. 
- fix update message (Or remove update Dialog completely)
- Replace Tabletop by something a little less deprecated
- fix update message (Or remove update Dialog completely)

## Buglist
- Left and right button overlap in lesson CRM
- Sometimes wrong Mnemonic is displayed