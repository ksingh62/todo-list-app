# Lab Assignment 1: Spinning Up React Native App

## System Requirements

The system being used for the React Native development have the following specifications:

    CPU: Intel(R) Core(TM) i5-9300H CPU @ 2.40GHz
    RAM: 16GB @ 2667 MHz
    Windows Version: Windows 10 Home

## Installation Instructions

1. Install Node.js

   - Visit [Node.js](https://nodejs.org/en) website and download the latest LTS version.
   - Follow the installation wizard for Windows.

2. Install Android Studio

   - [Download](https://developer.android.com/studio/index.html) and install Android Studio.
   - While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

     - Android SDK
     - Android SDK Platform
     - Android Virtual Device

       **Note:** If your selected directory location has whitespace, that can cause problems with the NDK tools. So, select a new Android SDK location without whitespaces.

   - Then, click "Next" to install all of these components.
   - Accept all the license agreements and Click 'Finish'.

3. Install the Android SDK

- **Note**: A copy of the latest OpenJDK comes bundled with Android Studio 2.2 and higher. Additional Android SDKs to build React Native app can be installed through following steps:

  - Open Android Studio.
  - Click on "More Actions" button and select "SDK Manager" under "Languages & Frameworks".
  - Look for and expand the latest Android entry like Android 14.0 ("UpsideDownCake") in our case, then make sure the following items are checked:
    - Android SDK Platform 34
    - Intel x86 Atom_64 System Image **or** Google APIs Intel x86 Atom System Image
  - Then, select the "SDK Tools" tab and check the box next to "Show Package Details".
  - Look for and expand the Android SDK Build-Tools entry, then make sure that 34.0.0 is selected, which is latest.
  - Click "Apply" to download and install the Android SDK and related build tools.

## Configuration Steps

1. Configure the ANDROID_HOME environment variable

   - Open the Windows Control Panel.
   - Click on User Accounts, then click User Accounts again
   - Click on Change my environment variables
   - Click on "New..." button to create a new ANDROID_HOME user variable that points to the path to your Android SDK, which you can find in the Android Studio "Settings" dialog, under Languages & Frameworks → Android SDK.

    The React Native tools require some environment variables to be set up in order to build apps with native code.

2. Add platform-tools to Path

   - Open the Windows Control Panel.
   - Click on User Accounts, then click User Accounts again
   - Click on Change my environment variables
   - Select the Path variable.
   - Click Edit.
   - Click New and browse the directory to add the path to platform-tools to the list.
   - Click "Ok."

## Project Creation

1. Open terminal, cd to directory where you want to create a react native project.
2. Run ```npx react-native@latest init [ProjectName]```
3. Press ```y``` to proceed.
4. Your project will be create in the directory with your [ProjectName] name.

## Running the Project in Android Studio

1. Create a AVD (Android Virtual Device)
    - Open Android Studio
    - Click on "More Actions" > "Virtual Device Manager" > "Create Device"
    - On the Select Hardware page, select a Mobile Phone device to and click the next button.
    - Download a system image for the android device, like Tiramisu API Level 33.
    - Click finish after setting up the AVD.

2. Run the project in the Android Device Simulator
    - Open Android Studio
    - Browse and select the android folder in the react native project.
    - After the project opens in Android Studio, Click on Build > Make Project.
    - After the Build completes, Click on Run > Run 'app'.
    - The app will be launched in the AVD, that we selected.

## Troubleshooting

- Error on running app from command line with ```npm run start```

  - Open the Windows Control Panel.
  - Click on User Accounts, then click User Accounts again
  - Click on Change my environment variables
  - Check for java/jdk Path in User variables and System variables and delete these paths.
  - Add this path to the System variables ```C:\Program Files\Android\Android Studio\jbr\bin``` and click "ok".
  - Rerun the project with ```npm run start```.

If, the project again results in an error in CLI, restart the command line application **or** restart the computer.

## Resources

<https://stackoverflow.com/questions/42172010/do-i-need-to-install-jdkjava-development-kit-separately-for-using-android-stud>

<https://reactnative.dev/docs/environment-setup?guide=native>
