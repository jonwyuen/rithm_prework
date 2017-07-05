<b>Terminal Basics Exercises</b>

Part I

1. mkdir first
2. cd first
3. touch person.txt
4. mv person.txt another.txt
5. cp another.txt copy.txt
6. rm copy.txt
7. cp -r first second
8. rm -rf second

Part II

1. The man command lists the manual for a command. Press "d" to scroll down half a page, "u" to go back half a page, "b" to go back one page, and "q" to get out.
2. The -l tag for ls lists files in a list format with more information about each file. The -a tag for ls lists all files and folders, including the hidden ones.
3. Download and save contents of google.com: 
	
		curl https://www.google.com > google.html
4. Look at contents of google.html: 
	
		less google.html
5. Search for the text hplogo in google.html: 

		less -p hplogo google.html
6. Jump between words in terminal: 
		
		option left/right arrow
		
7. Get to end of a line in terminal: 
	
		control + e
		
8. Move cursor to beginning in termal: 
		
		control + a
		
9. Delete a word in terminal: 
		
		control + w
		
10. Terminal is a program that gives us a command line interace to interact with the computer and runs a shell. Shell is the program that actually processes commands and returns output.
11. Absolute path is a path that starts from the root route and gives the complete location of the file or folder.
12. Relative path is a path that starts at the current location.
13. A flag for a command is an option that can be passed to that command. Three examples of flags are the -a and -l flags for the ls command and -r for the cp and rm commands.
14. The -r flag for the rm commmand will remove folders by recursively going through each folder and file. The -f flag for the rm command will force the removal of the folders and files.


<b>Permissions, Redirection, and Piping Exercise</b>

Part I

	1. touch restricted.txt
	2. chmod 600 restricted.txt
	3. chmod a+rwx restricted.txt
	4. mkdir secret_files; touch secret_files/first_secret.txt; mkdir secret_files/classified; touch secret_files/classified/super_secret.txt 
	5. chmod -R 770 secret_files
	6. ln restricted.txt hard_link
	7. ln -s secret_files/classified classified_link

Part II

	1. sort vegetables.txt
	2. wc -l vegetables.txt
	3. cat vegetables.txt | sort | uniq > vegetables\_sorted.txt
	4. cat vegetables.txt | tail -n 3 > last\_three.txt
	5. cat vegetables.txt | grep "Broccoli" | wc -l


<b>Intermediate Terminal Exercises</b>

Part I

1. export FIRST_NAME=Jonathan
2. echo $FIRST_NAME
3. echo $PATH
4. $PATH variable is a set of paths for our environment to find programs to execute.
5. We want to create an environment variable because it secures information and allows us to conveniently use a variable multiple times.
6. To permanently save environment variables, we need to save them in our .zshrc or .bash_profile file.
7. A process is a computer program that is being run.
8. To list all processes running on our machine, we use ps aux.
9. PID is a number that uniquely identifies a process, and is needed when we need to stop a process.
10. We terminate a process by using kill or kill -9.
11. The -9 flag for the kill command represents the KILL signal, which ensures that the command is non-catchable and non-ignorable. Without the -9 flag, the kill command may not terminate the process if the program has crashed or is frozen.
12. grep flag for case insensitive search: -i
13. grep flag for certain number of lines before the match: -B
14. grep flag for certain number of lines around the match: -C
15. grep flag for certain number of lines after the match: -A
16. grep flag for full word search: -w
17. grep flag for line number of match: -n

Part II

1. Find all files inside Desktop folder that have a name of "learn": 
	
		find ~/Desktop -name "learn"
		
2. Find all files inside Desktop folder that start with a "P": 
	
		find ~/Desktop -name "P*"
		
3. Find all files inside Desktop folder that end with .txt: 
	
		find ~/Desktop -name "*.txt"
		
4. Find all files inside Desktop/views folder that have the name "data" somewhere in filename: 
	
		find ~/Desktop/views -name "*data*"
		
5. Inside of instructors.txt, output the number to times the word "Elie" appears: 
	
		grep -c "Elie" instructors.txt
		
6. Inside of instructors.txt, list all matches for any full word that starts with a capital "P": 
	
		grep -w "P.*" instructors.txt
		
7. Inside of instructors.txt, list all the line numbers for any full word that starts with a "z", case insensitive: 
	
		grep -ni "z.*" instructors.txt


<b>Advanced Terminal Exercises</b>

Part I

instructors.txt

	Elie-Schoppik-sushi
	Tim-Garcia-gummybears
	Janey-Keig-bagels
	Colt-Steele-tacos
	Matt-Lane-pizza

1. Replace all of the - with : using sed: 
	
		sed 's/-/:/g' instructors.txt
		
2. Return a file with just the first name and last name separated by a space: 
	
		cut -d- -f1 -f2 instructors.txt | sed 's/-/ /g' > new_instructors.txt


numbers.txt

	1>>>>2
	2>>>>3
	3>>>>4
	4>>>>5

Part II

1. Using cut print out just the numbers 2, 3, 4, 5. Use xargs to print them all on 1 line: 
	
		cut -c 6 numbers.txt | xargs
		
2. Using xargs in the ./Desktop directory, find all of the files that include the text Welcome:
	
		find ~/Desktop -name "*" | xargs grep Welcome
		
3. Write a shell script called access_file.sh which accepts one parameter and changes the permissions to 755:

		chmod 755 $1
		
4. Write a shell script called unaccessible_sh.sh which accepts one parameter and changes the permissions to 300:
	
		chmod 300 $1
		
5. Using sed write the command to replace all instances of the name "foo" with the string "bar" in a file called baz.txt:
	
		sed 's/foo/bar/g' > baz.txt
		
6. Write the command to only print out all of the pids using awk:
	
		ps aux | awk '{print $2}'
		
7. Type in the df -h command - it will show you much space you have on your hard drive. Using the awk command, print out only the first percentage capacity:
		
		df -h | awk 'FNR == 2 {print $5}'


