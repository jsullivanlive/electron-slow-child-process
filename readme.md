breakout project to see why certain terminal calls are slow

created for https://github.com/electron/electron/issues/36254

    nvm use
    npm i 
    npm start

the mounted drive is hard-coded in this example (under /Volumes) so repro will need a mounted drive with the same name or you need to update the name in the code to the drive you mounted

