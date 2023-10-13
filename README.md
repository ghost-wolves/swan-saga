# Capstone Proposal

## 1. Problem Statement

Many people want to enjoy a classic RPG on a whim without having to deal with Steam or fussy emulators. They'd like to quest right in their browser with no install required! How can we appease such lazy people?

## 2. Technical Solution

Create an RPG that runs in browser. Make it easy to start playing and save user state for later.

## 3. Glossary

### User
A user of the website. The user will play the game and have their own save game file to continue where they left off.
### Character
A playable character in the game. The will be owned by a User and have their own stats, items, inventory and quests.
### Item
An item than can be used or equipped by a character.
### Location
A place the character can travel to and displayed in the game.
### Monster
An enemy the player engages in combat with.

### NPC

A non-playable character a "playable character" can interact with (talk to, shop, etc.)

### Quest

The goal of the game that tracks user progress and end states.

### Save

A collection of data that represents where the user is in the game and can load the game where the user left off. Owned by a user.

## 4. High Level Requirement

Briefly describe what each user role/authority can do. (These are user stories.)

### Example

- Create a user (anyone).
- Play the game (USER).
- Save the game (USER).
- Load the game (USER).
- Delete a save (USER).
- Delete an account (USER).

## 5. User Stories/Scenarios

### Create a User

Create a user that can play the game.

Suggested data:
- Username
- Password

**Precondition**: None

**Post-condition**: A user is created and can log in.

### Play the Game

User can interact with the game in browser.

**Precondition**: User must be logged in.

**Post-condition**: A user can save or load a game. A user can log out.

### Save the Game

User can save the current game.

**Precondition**: User must be logged in. User must have started a game. User must be at a place to save the game in-game.

**Post-condition**: Game save is exported to database and stored according to the user ID. 

### Load the Game

User can load a game from before.

**Precondition**: User must be logged in. User must have a save game file.

**Post-condition**: Game save is loaded from the database and play is resumed.

### Delete a Save

User can delete a saved game.

**Precondition**: User must be logged in. Must have a save game file.

**Post-condition**: The save is removed from the database.

### Delete an Account

User can remove their account.

**Precondition**: User must be logged in.

**Post-condition**: User's account is removed from the database.