Development decisions

My first inclination was that content would be displayed through a simple vertically scrolling feed. The factor driving that choice was that I felt I did not have the time to design and build any type of navigation between pages/views. Initially I was not seeing all of the required content from the API. I was missing Plot, Director and Writer for individual episodes. After emailing Mark with this concern I started building the vertical scroll feeds with the content I was able to retrieve.

After getting Mark's reply I dug a little deeper in the API and found that I actually needed to do three GET requests to get the data back for one episode. The first was to search IMDB for the series. I probably could have done some sort of picker for the three series requested and saved this GET request but it didn't seem very realistic for a real world application. After getting the series I then build a Picker component that displays the available seasons where appropriate, leaving them off movies for example. Picking a season number from the picker gets you all of the episodes in that season. After this is where the API got a little wonky. You can't simply make a GET request to the URL with a "?Season=1" and get back the Plot, Director and Writer or Poster for all the Episodes in that season. That call only returns the series' "Episodes" array of objects that have each episode's title, rating, and imdbID. To get the Plot, Director, Writer and Poster for each episodes it was necessary to iterate over the episodes and get each one's episode imdbID and construct a new URL to make a batched GET request. These requests return all of the required information on the individual episodes.

After I finished the functionality for getting the required information back I wasn't really happy with the way the vertical scrolling feed looked. It also raised an issue with the keyboard blocking content. React Native has a KeyboardAvoidingView that might have taken car of it and there was some open source options available on Github as well. I don't think either offered good cross platform support. Additionally, the effort necessary to implement them would have only yielded a crowded view experience. After considering this I re-made and re-styled the content feed as a horizontally scrolling feed. This keeps content above the keyboard with lots of breathing room.

Packages

Axios <https://github.com/axios/axios>

-   Axios eliminates the need to pass results of an http request to the .json() method in contrast to fetch()
-   Fetch will execute the .then block even when the request returns something like a 400 error. Axios logs the error but it doesn't hit the .then block. Instead it falls to .catch as you might expect.

react-native-stars <https://github.com/Extrct/react-native-stars#readme>

-   Because who really wants to read user rating numbers? This was a simple npm module that converts a number to a star rating and made it easy to compare episode reviews at a glimpse.

Build and Installation

IOS

1.  Run "npm run eject" from the command line. This exposes the ios directory so the .xcodeproj can be opened in Xcode.
2.  Create a provisioning profile in Apple Developer account.
3.  Download and click the provisioning profile to install on the local development machine
4.  Set the team for the desired build targets.
5.  Connect the build device and select it in Xcode
6.  Click the build and run button in the upper left corner of Xcode

Android

While I had done a considerable amount of development work on both Android and IOS using AngularJS and ionic framework / Cordova my work on React Native has focused more on the IOS side. Due to this I didn't really have the environment setup to run the application on Android outside the "react-native run-android" command line tool.
