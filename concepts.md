# Simple browser game

This game will feature 3 heroes that will be controlled by the player.
Eventually I'd like to make the heroes customizable, but for now we can use default characters.
I've built class constructors so creating new characters should be easy and modular.

When the player clicks the attack button the players equiped weapon should reduce the enemys health accordingly.
If the attack would kill the enemy then the player is rewarded xp and loot, and a new monster is loaded onto the screen.

When monsters are loaded they can either be pulled from a list of prebuilt monsters, or possibly they could be custom built using an algorythm based on the player stats.

After the player finishes their actions it is the monsters turn.
On the monsters turn they should pick a target to attack, or if special abilities are added they can choose to use their ability. 
When the monster attacks they should subtract their damage from the players heroes health.

If the monster is able to kill a players hero then the player should be given the option to hire a new hero at lvl 1.
If the monster is able to beat the entire hero party then we can create a game over screen, or just let them load up 3 new heroes.

During the players turn they should be able to use items such as healing potion, or equip items from their inventory.

I am open to any new ideas or reworking of my current ideas. 
The gameplay should be simple, quick, and also at least somewhat balanced. 

## Some things im still undecided about:
Should the heroes and monsters do fixed damage based on their weapons and level, or randomly picking based on their weapons and stats from a range?
I think fixed would feel more consistant and balenced but random has a more classic rpg feel to it.

Also when leveling should the heroes get fixed stat updrades, or should they be allowed to choose where to allocate points?

Should there be a store where the heroes can purchase new items and upgrades or should they only find those things from loot?

Should the monster come from a predetermined list or should we builed it based on the stats of the player characters? Same for the heroes and items.
