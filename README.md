# MCPE/MCBE Realm Chat Bridge
See your mcpe/mcbe realm chat in your Discord server!
<br<br>

## Setup instructions
If you have plans to test this on a local world, keep in mind you'll have to setup a loopback exemption, otherwise this will not work at all, more info can be found below. I also recommend finding a server to host the server for the websocket and bot for 99%-100% uptime, also eliminating the need for a loopback exemption. Regardless of whether or not you host locally, or on a server, know that you'll need to setup port forwarding, more info below. Also note that if you're using this on a realm, you'll want to connect to your servers/your public ip, not your private ip.
<br><br>
### Loopback Exemption (Use commands in powershell)
To view all UWP apps `Get-AppxPackage`
To view MCBE specifically `Get-AppxPackage | Select-String -Pattern "Minecraft"`
<br>
Using the second command, we can see that the app name is technically "Microsoft.MinecraftUWP_8wekyb3d8bbwe"
To add a loopback exemption, simply type `CheckNetIsolation LoopbackExempt -a -n="Microsoft.MinecraftUWP_8wekyb3d8bbwe"` (Run as an administrator)
<br><br>
### Port Forwarding
If local, open command prompt and type ipconfig, you'll then want to access your router and setup ipv4/ipv6 portforwarding on port 3000 to the ip address specified by the command. 
<br><br><br>
## Change Log
<br>
### V1.0.0
Server Script created, but plans for an auto connector are planned to allow for easier connection.
