<h2>Hybrid application development</h2>

This application is term project of Hybrid application development

Kwangmin Kim 5738001

<h3>Attendance Notification</h3>

This applcation provides notice attendance of stduent to their parents 
When the teacher check attendance by this application, it will send SMS message to their parents .

<h3>Features </h3>

<ul>
 <li>Users who are teacher register student information with thier parent information to this application</li>
 <li>Generate QR Code of students</li>
 <li>Users scan QR Code of students by Camera</li> 
 <li>Application supports report of each student attendance with date </li>
 <li>Application supports report of all student attendance list </li>
 </ul>




<h3>Tech stack:</h3>

- Ionic 3
- Angular2+
- Firebase
- QR Code

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
```

Then, to run it, cd into `attendance` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.
