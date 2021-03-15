---
date: 2021-03-12
---

# Git

## How git works under the hood

### Repository

- The purpose of git is to manage a project or a set of files as they change over time
- This information is stored in a data structure called a _repository_
- A repository contains:

  - A set of _commit objects_
  - A set _references_ to commit objects, also known as _heads_

- The repository is stored in the same folder as the project itself, inside the `.git` folder

#### Commit Objects

- A commit object contains:

  - A set of files, reflecting the state of the project in that point of time
  - Reference to a _parent commit objects_
  - An _SHA1 name_ that uniquely identifies the commit object. Identical commits will always have the same hash value

- There is always one commit object without a parent, the first commit of the project
- You can visualize a repository as a _directed acyclic graph_ of commmit objects
- Git is all about performing some operation to query or manipulate this graph of commits

#### Heads

- A head is a reference to a commit object
- Every head has a name
- By default every project has the _master_ head
- A project can have multiple heads, but one head is always the _current head_, aliased with `HEAD`

### Branching

- "branch" and "head" are often used interchangeably
- Every branch is represented by one head
- Sometimes branch is used to refer to the head and all history, while head solely refers to a single commit object

#### Common branching Use Patterns

- A common way to develop is to maintain a _main_ branch and create new branches for each new feature to add
- In this case the _master_ branch is always a _releasable candidate_

## Git fork workflow ([Reference](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/))

- Fork the repository, then clone the fork

```bash
$ git clone https://github.com/waynee95/<fork>.git
```

- Add original repository as `upstream` to be able to fetch latest updates

```bash
$ git remote add upstream https://github.com/<org>/<original-repo>.git
```

### Adding a new feature

1. Create and checkout a _feature_ branch
2. Make changes to the files
3. Commit changes to the branch/fork

```bash
$ git checkout -b <new branch>
$ git push origin <new branch>
```

Then create a PR in the original repository.

### Cleaning up

- After the feature was merged, update the fork

```bash
$ git pull upstream master
```

- Delete the feature branch, as not needed anymore

```bash
$ git branch -d <branch name>
```

- Update the master branch of the fork

```bash
$ git push origin master
```

- And also delete the feature branch in the remote repository

```bash
$ git push --delete origin <branch name>
```

### Keeping fork in sync

- Make sure to always have the most recent version in the fork, since forks do not
  update automatically!

```bash
git pull upstream master
git push origin master
```

## References

- [Understanding Git Conceptually](https://www.sbf5.com/~cduan/technical/git/)
- [Git Documentation](https://git-scm.com/doc)
