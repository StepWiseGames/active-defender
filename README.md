# active-defender
This project alone will not reduce the instances of mass attackers. It is a response, a social commentary to the trend, and it is intended to get people into a mindset about how to prepare and defend themselves from those who use violence immorally. 

## Game Mechanics
Imagine playing something like a classic final fantasy, a top-down turn-based RPG. Rather than using a RNG to generate battles, we're using story mapping to create encounters of varying severity. The idea is that mapping should allow for scenarios that escalate or de-escalate based on player response. Below are some of the broader mechanisms:

### Communication/Trust
Players will assume the role of a facilities coordinator at their local community bank, and build relationships with co-workers through work-tasks and dialogue that may gain the player *abilities*, *tools*, *information* and *trust*. Trust levels will determine how willing co-workers will be in cooperating with the player during crisis moments. If characters are willing to join your party during a crisis moment, they may have access/abilities that your player doesn't possess, and that may provide the player with new options in protecting their party's survival.

### Navigation
* Characters will be placed on individual tiles, and move along a tile grid. Artwork will be laid over the grid to simulate office space.
* A player will be able to move characters within his party during crisis moments by communicating with them. They may or may not comply based on trust level. Trust will increase/decrease depending on which individuals are influenced.

### Procedural Menus (with accompanying artwork)
* A menu system will guide players through procedural techniques (IE: CPR, Rear Naked Choke, Clearing a firearm) to influence the outcomes of these scenarios. 
* Once an ability is learned, it must be practiced by stepping through the menu and choosing the right options. It cannot be envoked like a magic spell, and the effectiveness is based on competency/execution of the steps.
* Proceedures may be linked based on how a player chooses their execution, ultimately deciding success or failure.

Please forgive my psuedo-code, but this is an example of how a fight might break down with limited knowledge of BJJ moves. 

> clinch() -> result = success -> legHookTakeDown() -> **success** -> mount() -> success (enemy.isMounted = true) -> AmericanaArmlock() -> success -> Enemy.isSubmitted = true; **Player Wins**

> clinch() -> result = success -> legHookTakeDown() -> **failed** -> player.isMounted = TRUE -> trapAndRoll -> success player.isInGuard ->  passGuard() -> success -> Enemy.isMounted -> americanaArmlock() -> success -> Enemy.isSubmitted = true; **Player Wins**

As you can see, there is 4 moves in our first example, and 6 in our second example. Because the player failed in the 2nd example they had to use a trapAndRoll to get out of the mount, and then pass the enemy's guard in order to perform a submission move and win the fight.

More to come... Stay tuned...
