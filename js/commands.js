
var linkedin = "https://www.linkedin.com/in/gavinwill/";
var github = "https://github.com/gavinwill";
var email = 'mailto:g@gavinwill.me.uk';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `I am Gavin, an experienced senior devops engineer / site reliability engineer. I enjoy
problem solving, automation and building great things with great teams.`,
  `I have worked in a wide range of industries from AAA Game development at Rockstar Games
and Epic Games (on titles such as Grand Theft Auto V, Red Dead Redemption 2 and Fortnite)
and also at large scale internet companies such as Skyscanner.`,
  "<br>",
];

links = [
  // format as table to achieve responsive column layout
  `<table>
   <tr><td>linkedin</td><td><a href="${linkedin}" target="_blank">linkedin/gavinwill</a></td></tr>
   <tr><td>github</td><td><a href="${github}" target="_blank">github/gavinwill</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "Work in progress... most projects are still offline, on GitHub or confidential.",
  "Here is a list of some of my GitHub repositories:",
  "<br>",
  `<div id="repo-box"></div>`,
  repos,
];

help = [
  "<br>",
  'commands to navigate this web-terminal:',
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>Who is Gavin?</td></tr>
  <tr><td><span class="command">links</span></td><td>Gavin's links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View projects</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>Return list of available commands</td></tr>
  <tr><td><span class="command">email</span></td><td>Email me</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">banner</span></td><td>Display the banner</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Tab completion</td></tr>
  </table>`,
  "<br>",
  'Also there may be some other linux commands that you know.....',
  "<br>",
];

// ascii font ref:  https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Gavin%20Will
banner = [
  "<br>",
  "██████╗  █████╗  ██╗   ██╗██╗███╗   ██╗    ██╗    ██╗██╗██╗     ██╗     ",
  "██╔════╝ ██╔══██╗██║   ██║██║████╗  ██║    ██║    ██║██║██║     ██║     ",
  "██║  ███╗███████║██║   ██║██║██╔██╗ ██║    ██║ █╗ ██║██║██║     ██║     ",
  "██║   ██║██╔══██║╚██╗ ██╔╝██║██║╚██╗██║    ██║███╗██║██║██║     ██║     ",
  "╚██████╔╝██║  ██║ ╚████╔╝ ██║██║ ╚████║    ╚███╔███╔╝██║███████╗███████╗",
  " ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚═╝╚══════╝╚══════╝",   
  "<br>",
];

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Welcome!.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> (and press 'return') to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "linkedin", "github", "history", "clear", "banner", "theme",
  "echo", "ping", "ls", "cd", "vi", "vim", "nano", "sudo", "gui",
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};

allArgs = [
  "ls", "set", "random", ...themes,
];

