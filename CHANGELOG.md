# Changelog

### 0.9.8.1:
- User mnemonics are displayed in sandboxed iframes
- moved to separate copy of spreadsheet, to prevent mixing of Mnemonics with users from older, insecure versions. 
  (https://docs.google.com/spreadsheets/d/1GR1D7irVwBMnjJeMK1GwZ5K4hqXz0i5SpQaWmS3EphM)
- Changed Google App Script for insert into Spreadsheet: Added regex to replace all HTML tags except the ones, used for highlighting. Also added it to GitHub. 
- The Spreadsheet is also read only, making the insert script the only way for data to enter the Spreadsheet. 

## 0.9.8:
- Now works on every site, it was originally meant to work on: + the item site outside the review. 

## 0.9.7.9 - 2020.11.22: 
- Applied fixes by TellowKrinkle from the WaniKani community: https://community.wanikani.com/t/userscript-community-mnemonics-v0978/7367/139
- Fixed the infamous "c" user bug