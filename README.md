# Cordova AdMob plugin demo for Ionic framework#

App demo for [Cordova AdMob plugin](https://github.com/floatinghotpot/cordova-admob-pro/), using Ionic framework

### Quick Start ###

First, make sure Android SDK (for android) or Xcode (for iOS) is installed.

```bash
# install ionic
[sudo] npm install cordova ionic -g

# start an blank App with name "ADMobDemo", app ID "com.admob.demo", in folder "admob"
ionic start --appname "ADMobDemo" --id com.admob.demo admob blank

# add admob plugin
cd admob
ionic add ios
ionic plugin add cordova-plugin-admobpro

# remove all default files in www folder
rm -rf www/*

# download demo and copy files to www folder
curl https://codeload.github.com/jaivehall/admob-ionic-demo/zip/master -o demo.zip
unzip demo.zip
cp -r admob-ionic-demo-master/demo/* www/

# build and run demo app in ios simulator
ionic emulate ios
```

### Screenshot ###

![ScreenShot](https://github.com/jaivehall/admob-ionic-demo/raw/master/screen.png)

