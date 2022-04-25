# Roblox-vnc-client
This is a working vnc client in roblox and node.js meant to run qemu
![image](https://user-images.githubusercontent.com/95697986/165182586-93655860-30b8-4ffa-b33b-6ee949cfbee2.png)


# Setting Up
To install you'll need:

-Node.js and npm. -note Dont use the apt version as the apt version is outdated. Just download it from node.js's website

-Port forward port :3000 or you can use ngrok to do that for you
-these packages which you can install with

```
npm install express
npm install vnc-rfb-client
npm install jimp
````

next run qemu with -vnc :0 (also dont change :0 to something else as that will break this script)
if you need an example just copy and paste this
```
qemu-system-i386 -vnc :0
```
great job! now just run 
```
node app.js
```

now go to the link
```
localhost:3000/screenshot
```
if you see the vm screen it means its working
next open the roblox place and go to serverscript and then script. Find the text that has that really long link and replace it with yours

# Youre now done
excellent work. Enjoy your roblox virtual machine.
