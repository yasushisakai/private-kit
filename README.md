# PrivacyKit

A personal location vault that nobody else can access. It will allow you to log your location privately every five minutes. No information will leaves the phone.

## Behavior

1. Get consent to locally track location and send an encoded version online. 
2. Locally cache loction info once every 5 minutes: ```	Time  |  GPS Lat  |  GPS Lon ```

# Development

This is a React Native app version 61.5

## TODO

Android is currently being optimized.  iOS will need to be tested, optimized, and prepared for launch.

## Developer Setup

Refer to and run the dev_setup.sh for needed tools.

## Running

Install modules:
```npm install``` or ```yarn install```

To run, do:
```
npx react-native run-android
```
or
```
npx react-native run-ios
```

## Deploying

App is deployed to MIT's PlayStore account: https://play.google.com/store/apps/developer?id=MIT

## Tested On

| Device | Version |
| ------------- | ------------- |
| Android Pixel | API 28  |
| Android Pixel | API 29  |

# References

Website: http://privacykit.mit.edu
