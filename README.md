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
del -fr www/*

# copy files from the demo folder of this repository to www folder
cp -fr ../demo/* www/

# run it
ionic prepare ios
ionic build ios
ionic emulate ios

```

### Screenshot ###

![ScreenShot](https://github.com/jaivehall/admob-ionic-demo/raw/master/screen.png)

