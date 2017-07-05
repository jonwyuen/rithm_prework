<b>Git Basics Exercises</b>

	1. mkdir learn_git_again
	2. cd learn_git_again
	3. touch third.txt
	4. git init
	5. git add third.txt
	6. git commit -m "adding third.txt"
	7. git log
	8. touch fourth.txt
	9. git add fourth.txt
	10. git commit -m "adding fourth.txt"
	11. rm third.txt
	12. git add third.txt
	13. git commit -m "removing third.txt"
	14. git log
	15. git config --global core.pager "cat"
	16. git config --global --list


<b>Branching and Merging Exercises</b>

Part I

	1. Git clean removes untracked or unmerged files from the working directory.
	2. The -d and -f flags for git clean forcefully removes both untracked files and untracked directories.
	3. The git command that creates a branch is git checkout -b name_of_branch.
	4. A fast-forward merge occurs when git can easily tell when the commits happened and put one set of commits on top of another chronologically. A recursive merge occurs when different commits happen at different times on two branches and Git cannot easity determine what order these commits happened in.
	5. The git command that changes to another branch is git checkout name_of_branch.
	6. To remove modified or deleted files from the working directory, we use git checkout name_of_file.
	7. The git command that deletes a branch is git branch -D name_of_branch.
	8. The git diff command shows a comparison between two different commits.
	9. To remove files from the staging area, we can use either git reset HEAD name_of_file or git rm --cached name_of_file.
	10. Merge conflicts happen when Git does not know which commit to go with when there are different commit changes to the same file on two different branches.

Part II

	mkdir new_folder
	cd new_folder
	git init

	git checkout -b new_branch
	touch new.txt
	echo from new_branch > new.txt
	git add .
	git commit -m "adding new.txt"

	git checkout master
	echo from master > new.txt
	git add .
	git commit -m "adding new.txt on the master branch"

	git merge new_branch

This will create a merge conflict.

cat new.txt

	from master
	=======
	from new_branch
	>>>>>>> new_branch

We need to manually change new.txt so that git knows what version we want.
If we want to keep the version from new_branch, we open new.txt in a text editor and make the following changes and save the file:

	from new_branch

We can then go back to the terminal and run the following commands:

	git add .
	git commit -m "fixing merge conflict"

The merge conflict should be solved.


<b>GitHub Exercises</b>

Part I

1.

	mkdir github_exercise
	cd github_exercise
	touch first.txt
	touch second.txt
	git init
	git add .
	git commit -m "initial commit"

2.

	git remote add origin git@github.com:jonwyuen/
	github_exercise.git
	git push origin master

3.
Done on GitHub

4.

	git checkout -b new_branch
	touch new.txt
  	echo Hello World > new.txt
  	git add .
  	git commit -m "added new.txt"
  	git push origin new_branch

5.
Done on GitHub

Part II

1.find clues: 

	grep "CLUE" crimescene

	Clue 1: suspect is tall male, at least 6'
	Clue 2: wallet belong to suspect; membership cards for AAA, Delta SkyMiles, the local library, and the Museum of Bash History
	Clue 3: witness is a woman named Annabel with blond spiky hair and New Zealand accent

2.find witness: 

	grep "Annabel" people

	Annabel Sun	F	26	Hart Place, line 40
	Annabel Church	F	38	Buckingham Place, line 179

3.start with Annabel Sun: 

	head -n 40 streets/Hart_Place | tail -n 1

	SEE INTERVIEW #47246024

4.read the interview: 

	cat interviews/interview-47246024
	
	Ms. Sun has brown hair and is not from New Zealand.  Not the witness from the cafe.

5.try Annabel Church: 

	head -n 179 streets/Buckingham_Place | tail -n 1

	SEE INTERVIEW #699607

6.read the interview: 

	cat interviews/interview-699607

	She reports seeing the car that fled the scene.  Describes it as a blue Honda, with a license plate that starts with "L337" and ends with "9"

7.find info about the car: 

	grep L337 vehicles -A 3 | grep Blue -C 1 | grep Honda -A 2

	Make: Honda
	Color: Blue
	Owner: Erika Owens
	--
	Make: Honda
	Color: Blue
	Owner: Aron Pilhofer
	--
	Make: Honda
	Color: Blue
	Owner: Heather Billings
	--
	Make: Honda
	Color: Blue
	Owner: Joe Germuska
	--
	Make: Honda
	Color: Blue
	Owner: Jeremy Bowers
	--
	Make: Honda
	Color: Blue
	Owner: Jacqui Maher

	Since suspect is male, use grep "name" people, and find the male suspects. 3 suspects left: Aron Pilhofer, Joe Germuska, and Jeremy Bowers

8.find info on Aron Pilhofer: 
	
	grep "Aron Pilhofer" people

	Aron Pilhofer	M	16	Claybourne Street, line 145

	head -n 145 streets/Claybourne_Street | tail -n 1

	SEE INTERVIEW #1767435

	cat interviews/interview-1767435

	Too short to match the camera footage.  Pilhofer is not considered a suspect.

9.find info on Joe Germuska: 

	grep "Joe Germuska" people

	Joe Germuska	M	65	Plainfield Street, line 275

	head -n 275 streets/Plainfield_Street | tail -n 1

	SEE INTERVIEW #29741223

	cat interviews/interview-29741223

	Should not be considered a suspect, has no SkyMiles membership and has never been a member of the Museum of Bash History.

10.find info on Jeremy Bowers: 

	grep "Jeremy Bowers" people

	Jeremy Bowers	M	34	Dunstable Road, line 284

	head -n 284 streets/Dunstable_Road | tail -n 1

	SEE INTERVIEW #9620713

	cat interviews/interview-9620713

	Home appears to be empty, no answer at the door.
	After questioning neighbors, appears that the occupant may have left for a trip recently.
	Considered a suspect until proven otherwise, but would have to eliminate other suspects to confirm.

11.check if Jeremy Bowers is suspect:

	echo "Jeremy Bowers" | $(command -v md5 || command -v md5sum) | grep -qif /dev/stdin encoded && echo CORRECT\! GREAT WORK, GUMSHOE. || echo SORRY, TRY AGAIN.

	CORRECT! GREAT WORK, GUMSHOE.

	Jeremy Bowers is the killer.


<b>Advanced Git Exercises</b>

Part I

1. Git reset undoes a commit and removes the commit from commit history, as well as all of the commits after the one you want to change. Git revert undoes a commit, but appends a new commit that undoes all of the changes introduced in a previous commit and applies it to the current branch. Git revert should be used when working with others because it is much safer and does not alter the history of commits.

2. Git merge and git rebase are both essential commands to integrate changes from one branch to another one when working with other developers. Git merge preserves the complete history of a project, meaning that the feature branch will have extraneous merge commits every time you need to incorporate upstream changes. This may pollute the feature branch's history if the master branch is very active. Git rebase maintains a clean linear history free of unnecessary commits, but should never be done on a public branch that has others working on it since it will re-write the commit history.

3. Git stash pop moves the latest stashed change back into working directory and removes it from the stash. Git stash apply moves the latest stashed change back into working directory, but keeps it on the stash. Both are used when working with others, but git stash apply is useful if you want to apply the same stashed changes to multiple branches. 

4. In interactive mode when rebasing, we can keep the commit, edit commit messages, edit commits, squash or fixup the commit to turn multiple commits into one, and remove the commit if we choose to.

Part II

Done on GitHub
