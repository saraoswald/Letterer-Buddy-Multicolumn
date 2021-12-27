# Letterer Buddy - Multicolumn

InDesign tool for pasting scripts into text frames. Designed for use with comic scripts. 

<img src="https://raw.githubusercontent.com/saraoswald/Letterer-Buddy-Multicolumn/master/resources/letterer-buddy-preview-tab1.png" width="400"> <img src="https://raw.githubusercontent.com/saraoswald/Letterer-Buddy-Multicolumn/master/resources/letterer-buddy-preview-tab2.png" width="400">

This is a fork of [Fog's Letterer Buddy](https://github.com/RisingFog/InDesign-Scripts). It adds multicolumn support, as well as scripts to use as shortcuts for navigating the script. 

## Usage
**To start up Letterer Buddy,** run the script with an InDesign document open ([See my guide on installing InDesign scripts for more info](https://github.com/saraoswald/Manga-Scripts#how-to-use-scripts-in-indesign)).

**To open a script,** select "Load Script", and select your text file from the file browser. The text file **must be a plain text file with the extension .txt**. There are a few parsing capabilities available, but you must do the bulk of the massaging outside of Letterer Buddy. A tool for turning Word documents into plain text files can be found here: https://lb-script-parser.glitch.me/

**To place text**, there are two suggested workflows. 
---
Bulk Option: **Place empty frames and fill them with text** (recommended)
1) Place empty text frames across as many pages in the InDesign document as you'd like, possibly with whatever [Paragraph Style](https://github.com/saraoswald/lettering-tutorials/wiki/Text-Placement-and-Balancing#formatting-text) you want them to have.
2) Open Letterer Buddy and load the script
3) Click once on each empty text frame to insert the text from the active row and column 
    - TIP: change the column whose text is pasted by going to `Settings > Paste from Column`
4) Repeat Steps 1 though 3 as needed

Individual Option: **Place one frame at a time, and fill it with text**
1) Open Letterer Buddy and load the script
2) Draw a text frame
3) Press `Esc` on your keyboard to insert the text from the active row and column 
    - TIP: change the column whose text is pasted by going to `Settings > Paste from Column`
4) Repeat Steps 2 through 3 as needed

## Usage Tips
- You can choose your starting point by selecting the required line in the script list.
- You can change which column of text is pasted by going to the `Settings` panel and changing the dropdown for `Paste from Column`
- You can save your settings by going to the `Settings` panel and checking `Save Settings`
- Resize the Letterer Buddy window by dragging the corners. It should work the same as other windows on your operating system. 
- Resize the script's columns by dragging the pipe `|` between columns. This should function similarly to spreadsheet programs. (**NOTE:** The width of each column is determined automatically by the longest piece of text in that column)
- Pause text insertion with the "Pause" button a the bottom of the window. This is helpful for when you've made a mistake. 

## Additional Tools
[My lettering guides](https://github.com/saraoswald/lettering-tutorials/wiki/Text-Placement-and-Balancing)
[My tool for turning Word documents into plain text files](https://lb-script-parser.glitch.me/)

### Navigational Shortcuts
This repository contains two additional scripts that let you change the selected row of the script. Bind these two scripts to keyboard shortcuts to make it easier to navigate the script more quickly. 
- [lettererbuddy - Go to Next Line.jsx](lettererbuddy%20-%20Go%20to%20Next%20Line.jsx) (Moves the selection down one row)
- [lettererbuddy - Go to Prev Line.jsx](lettererbuddy%20-%20Go%20to%20Prev%20Line.jsx) (Moves the selection up one row)

See [my guide on installing keyboard shortcuts](https://github.com/saraoswald/Manga-Scripts#setting-up-keyboard-shortcuts) for step-by-step instructions.
