# First try 
Pushing some files to Github. 
Following tutorial was used: https://www.youtube.com/watch?v=SWYqp7iY_Tc

# The notices
$ cd to project
$ git init # initialize folder 'init'
$ git config --global user.name 'Daniel Berger' # Add Name and email adress
$ git config --global user.email 'dberger@vc.systems'
$ git add (e.g.) index.html # add files to the git repo
$ git rm (e.g.) --cached index.html # removes files (index.html) from git repo
###

$ git add *.html # add any html files
$ git add . # add every file

### UNTIL NOW NO FILE WAS COMMITED
$ git commit (if vim editor opens. type 'i' to insert, ':wq' to write and quit. Editor nano works as well)
# if files changing in folder, then e.g. 'git add .' and 'git commit' has to be called again -> uncommend the file that has to be committed and save
# OR
$ git commit -m 'changed index.js and howto_git.txt'

### Ignore certain files or directories
$ touch .gitignore # creates a file where files or directories can be blacklisted
# e.g. see example gitignore in /home/dberger/WebstormProjects/hello_world/
# directories can be ignored by adding the path (e.g. /dir1) of that dir
# if *.txt is in blacklist (.gitignore), then every txt file will be withdraw from commit

### branches
$ git branch login # create a new branch
$ git checkout login # switch branch to login
# here changes at code/files/etc. can be made without touching the master branch

# if changes are good, then slave can be merged to master 
$ git merge (e.g.) login # this will merge the specified slave branch with the master branch

### push pull to/from remote repo (e.g. GitHub)
$ git remote add origin https://github.com/vc-dberger/howtoPush.git # add link to remote repo
$ git push -u origin master # push the local repo to the master branch at GitHub (or anywhere else)

# Then files/codes/etc. can newly created and worked on. Every git add ... and git commit .. will update that files locally!
# with ...
$ git push # ... all that local snapshot will be pushed to Github

### Git clone into new folder
