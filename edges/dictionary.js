const edge_dictionary = {
"basic skills" : {
"name" : "Basic Skills",
"category" : "Skill",
"desc" :`
Prerequisites: None
Effect: You Rank Up a Skill from Pathetic to Untrained,
or Untrained to Novice. You may take this Edge multiple
times.`},
"adept skills" : {
"name": "Adept Skills",
"category" : "Skill",
"desc" :`
Prerequisites: Level 2
Effect: You Rank Up a Skill from Novice to Adept. You
may take this Edge multiple times.`},
"expert skills" : {
"name": "Expert Skills",
"category" : "Skill",
"desc" :`
Prerequisites: Level 6
Effect: You Rank Up a Skill from Adept to Expert. You
may take this Edge multiple times.`},
"master skills" : {
"name": "Master Skills",
"category" : "Skill",
"desc" :`
Prerequisites: Level 12
Effect: You Rank Up a Skill from Expert to Master. You
may take this Edge multiple times.`},
"skill stunt" : {
"name": "Skill Stunt",
"category" : "Skill",
"desc" :`
Prerequisites: A Skill at Novice Rank or higher
Effect: Choose a Skill you have at Novice Rank or
higher. Choose a specific use of that Skill; when rolling
that skill under those circumstances, you may choose to
roll one less dice, and instead add +6 to the result. You
may take this Edge multiple times, choosing a different
circumstance each time.`},
"categoric inclination" : {
"name": "Categoric Inclination",
"category" : "Skill",
"desc" :`
Prerequisites: None
Effect: Choose Body, Mind, or Spirit. You gain a +1
Bonus to all Skill Checks of that Category`
},
"skill enhancement" : {
"name": "Skill Enhancement",
"category" : "Skill",
"desc" :`
Prerequisites: None
Effect: Choose two different Skills. You gain a +2 bonus
to each of those skills. Skill Enhancement may be taken
multiple times, but the bonus may be applied only once
to a particular skill.`
},
"virtuoso" : {
"name": "Virtuoso",
"category" : "Skill",
"desc" :`
Prerequisites: A Skill at Master Rank, Level 20
Effect: Choose a Skill at Master Rank. Consider that Skill
to be effectively “Rank 8” for any Features or effects that
depend on Skill Rank. Virtuoso may be taken multiple
times, but you must choose a different Skill each time.`
},
"apricorn balls" : {
"name" : "Apricorn Balls",
"category" : "Crafting",
"desc" : `Prerequisites: Novice Survival or Adept Technology
Education
Effect: As an Extended Action, you may craft Apricorns
into their corresponding Poké Ball. Use of this Feature
requires access to a Poké Ball Tool Box.`},
"basic balls" : {
"name" : "Basic Balls",
"category" : "Crafting",
"desc" : `Prerequisites: Novice Technology Education
Effect: You may craft Basic Balls for $100 and Great
Balls for $175. Requires access to a Poké Ball Tool Box.`},
"basic cooking" : {
"name" : "Basic Cooking",
"category" : "Crafting",
"desc" : `Prerequisites: Novice Intuition
Effect: You may create “Candy Bars” or “Baby Food”
with cooking ingredients costing $50. You may fluff the
food in any reasonable manner you like.`},
"gem lore" : {
"name" : "Gem Lore",
"category" : "Crafting",
"desc" : `Prerequisites: Novice Occult Education
Effect: As an Extended Action, you may turn a Shard
into a Gem of one of its associated Types. Additionally,
you can turn 4 Red Shards into a Fire Stone; 4 Blue
Shards into a Water Stone; 4 Yellow Shards into a
Thunder Stone; 4 Orange Shards into a Shiny Stone; 4
Green Shards into a Leaf Stone; or 4 Violet Shards into a
Dusk Stone. You can also destroy any of these six Stones
to gain 4 Shards of the corresponding color.`},
"green thumb" : {
"name" : "Green Thumb",
"category" : "Crafting",
"desc" : `Prerequisites: Novice General Education or Novice
Survival
Effect: You know how to grow Apricorns and Tier 1
Berries using a Portable Grower or Fertilized Soil.
Poké Ball Repair
Prerequisites: Basic Balls or Apricorn Balls
Effect: You may attempt to fix any Poké Ball that
has failed to capture a Pokémon and broke. Make a
Technology Check with a DC of 15. If you succeed, the
Poké Ball is fixed and is treated as if it had not broken. If
you fail, the ball is permanently broken. Requires access
to a Poké Ball Tool Box.`},
"repel crafter" : {
"name" : "Repel Crafter",
"category" : "Crafting",
"desc" : `Prerequisites: Novice Medicine or Technology Edu
Effect: Create a Repel for $100 or a Super Repel for
$150. Requires access to a Chemistry Set.
Tag Scribe
Prerequisites: Novice Occult Education
Special - Extended Action
Effect: You create a Cleanse Tag. This may be used a
number of times each day equal to half your Occult
Education Rank.`},
"breeder" : {
"name" : "Breeder",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Novice Pokémon Education
Static
Effect: If you are able to give two Pokémon that are
compatible for breeding at least 4 hours of time alone,
you may make a Pokémon Education Check with a DC
of 12. If you succeed, the Pokémon are guaranteed to
produce an egg if you give them an additional 4 hours.`},
"grace" : {
"name" : "Grace",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Novice Charm, Command, Guile,
Intimidate, or Intuition
Effect: Your Pokémon may consume and benefit from
2 more Poffins each. If this Pokémon is traded to a
Trainer without the Grace feature, these extra dice from
additional Poffins are not lost, but a Trainer without
Grace may not benefit from more than 6 Dice gained
from Poffins. You may always use any of the Skills that
are prerequisites for Grace in the Introduction Stage of
a Contest to roll for Contest Stat Dice of any kind. `},
"trainer of champions" : {
"name" : "Trainer of Champions",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Expert Command
Effect: Whenever you apply Experience Training to a
Pokemon, they gain an additional +5 Experience.`},
"dynamism" : {
"name" : "Dynamism",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Novice Guile
Effect: Your initiative is increased by your Guile Rank.`},
"expert manipulator" : {
"name" : "Expert Manipulator",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Adept Guile
Effect: You gain a +2 Opposed Checks with all
Manipulate Maneuvers. The “Once per Scene per
Foe” Limitation of each Manipulate Maneuver is
expended only upon succesfully affecting a foe with that
Manipulate Maneuver.`},
"groomer" : {
"name" : "Groomer",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Novice Pokémon Education
Effect: You know how to effectively groom your Pokémon
with access to a Groomer’s Kit. You may groom up to 6
Pokémon in one hour. Grooming Pokémon may count
as an hour of Training, and you may apply Experience
Training, teach Poke-Edges, and apply any Features
that could be applied during Training. If you apply
Experience Training from Grooming, use your General
Education or Pokémon Education Rank to determine
Bonus Experience gained during Training. A Pokémon
that has been Groomed also gains a +1d6 Bonus to the
Introduction Roll of a Contest for the rest of the day.`},
"paleontologist" : {
"name" : "Paleontologist",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Novice Pokémon Education or Novice Survival
Effect: You can identify fossils with a DC 10 Pokémon
Education or Survival Check. You know how to operate
Reanimation Machines and can use them to revive
Fossils. See the “Pokémon Fossils” section (page 216)
for more information.`},
"train the reserves" : {
"name" : "Train the Reserves",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Novice Command
Effect: You may apply Experience Training to a number
of Pokemon equal to twice your Command Rank, instead of equal to your Command Rank.
Note: Beast Master or Groomer do not change the Skill
that this Edge uses.`},
"beast master" : {
"name" : "Beast Master",
"category" : "Pokemon Training",
"desc" : `Prerequisites: Novice Intimidate
Effect: You may use Intimidate instead of Command to
make Pokemon at 0 or 1 Loyalty obey your commands.
You may also use Intimidate instead of Command
to determine the limits and Bonus Experience from
Training.`},
"athletic initiative" : {
"name" : "Athletic Initiative",
"category" : "Combat",
"desc" : `Prerequisites: Adept Athletics
Effect: You learn the Move Agility.`},
"bad mood" : {
"name" : "Bad Mood",
"category" : "Combat",
"desc" : `Prerequisites: Expert Intimidate
Effect: Your Critical Hit Range is increased by +1 if you
are suffering from a Persistent Status Affliction. Your
Critical Hit Range is increased by +1 if you are suffering
from a Volatile Status Affliction. These stack with each
other, giving a total of +2 to Critical Hit Range if you
are suffering from both a Persistant and a Volatile Status
Affliction.`},
"basic martial arts" : {
"name" : "Basic Martial Arts",
"category" : "Combat",
"desc" : `Prerequisites: Novice Combat
Effect: You learn the Move Rock Smash.`},
"basic psionics" : {
"name" : "Basic Psionics",
"category" : "Combat",
"desc" : `Prerequisites: Elemental Connection (Psychic)
Effect: You learn the Move Confusion.`},
"charmer" : {
"name" : "Charmer",
"category" : "Combat",
"desc" : `Prerequisites: Novice Charm
Effect: You learn the Move Baby-Doll Eyes.`},
"confidence artist" : {
"name" : "Confidence Artist",
"category" : "Combat",
"desc" : `Prerequisites: Novice Guile
Effect: You learn the Move Confide.`},
"demoralize" : {
"name" : "Demoralize",
"category" : "Combat",
"desc" : `Prerequisites: Adept Intimidate
Effect: Whenever you land a Critical Hit on a foe, that
foe becomes Vulnerable. Status-Class Moves with an
Accuracy Roll can “Crit” for the purposes of activating
this effect on a natural roll of 19 or higher, and any effects that expand your Critical-Hit Range also expand
this range.`},
"dynamism" : {
"name" : "Dynamism",
"category" : "Combat",
"desc" : `Prerequisites: Novice Guile
Effect: Your initiative is increased by your Guile Rank.`},
"expert manipulator" : {
"name" : "Expert Manipulator",
"category" : "Combat",
"desc" : `Prerequisites: Adept Guile
Effect: You gain a +2 Opposed Checks with all
Manipulate Maneuvers. The “Once per Scene per
Foe” Limitation of each Manipulate Maneuver is
expended only upon succesfully affecting a foe with that
Manipulate Maneuver.`},
"expert trickster" : {
"name" : "Expert Trickster",
"category" : "Combat",
"desc" : `Prerequisites: Adept Stealth
Effect: You gain a +2 Opposed Checks with all Dirty
Trick Maneuvers. The “Once per Scene per Foe” Limitation of each Dirty Trick Maneuver is expended only
upon successfully affecting a foe with that Dirty Trick
Maneuver.`},
"flustering charisma" : {
"name" : "Flustering Charisma",
"category" : "Combat",
"desc" : `Prerequisites: Adept Charm or Guile
Effect: When you hit with a Move with the Social
keyword, the target takes a -2 penalty to Save Checks
against Volatile Status Afflictions for 1 full round.`},
"intimidating presence" : {
"name" : "Intimidating Presence",
"category" : "Combat",
"desc" : `Prerequisites: Novice Intimidate
Effect: You learn the Move Leer.`},
"kip up" : {
"name" : "Kip Up",
"category" : "Combat",
"desc" : `Prerequisites: Expert Acrobatics
Effect: You may stand up from being Tripped as a Swift
Action`},
"leader" : {
"name" : "Leader",
"category" : "Combat",
"desc" : `Prerequisites: Adept Command
Effect: You learn the Move After You.`},
"nimble Movement" : {
"name" : "Nimble Movement",
"category" : "Combat",
"desc" : `Prerequisites: Adept Acrobatics or Stealth
Effect: Whenever you Disengage, you Shift 2 meters
instead of 1.`},
"slippery" : {
"name" : "Slippery",
"category" : "Combat",
"desc" : `Prerequisites: Novice Stealth
Effect: You may use your Stealth Skill when defending
in Opposed Grapple, Push, or Trip checks. When
Grappling, if you win an Opposed Check when using
Stealth, you must choose to end the Grapple (you
cannot choose to gain Dominance).`},
"smooth" : {
"name" : "Smooth",
"category" : "Combat",
"desc" : `Prerequisites: Expert Charm or Expert Focus
Effect: You gain +4 Evasion against Moves with the
Social keyword, and gain a +2 Bonus on Save Checks
against Rage and Infatuation.`},
"sneak’s tricks" : {
"name" : "Sneak’s Tricks",
"category" : "Combat",
"desc" : `Prerequisites: Adept Stealth
Effect: You learn the Move Astonish.`},
"Stamina" : {
"name" : "Stamina",
"category" : "Combat",
"desc" : `Prerequisites: Expert Athletics or Expert Combat
Effect: Whenever you Take a Breather or take Massive
Damage or a Critical Hit, you gain Temporary Hit
Points equal to your Athletics or Combat Rank after the
triggering action has resolved.`},
"survival drive" : {
"name" : "Survival Drive",
"category" : "Combat",
"desc" : `Prerequisites: Adept Survival
Effect: You learn the Move Bulk Up.`},
"throwing masteries" : {
"name" : "Throwing Masteries",
"category" : "Combat",
"desc" : `Prerequisites: Adept Acrobatics
Effect: Increase the Throwing Range of your Poké Balls,
Ranged Weapons, and other small items by +2.`},
"weapon of choice" : {
"name" : "Weapon of Choice",
"category" : "Combat",
"desc" : `Prerequisites: A Feature with the [Weapon] tag
Effect: Choose a specific weapon type. You gain a +2
Bonus on Opposed Rolls to prevent being disarmed
while wielding weapons of your chosen type. If you
would be disarmed anyway, you may pay 1 AP to
prevent yourself from being Disarmed.`},
"work up" : {
"name" : "Work Up",
"category" : "Combat",
"desc" : `Prerequisites: Adept Focus
Effect: You learn the Move Work Up. `},
"acrobat" : {
"name" : "Acrobat",
"category" : "Other",
"desc" : `Prerequisites: Novice Acrobatics
Effect: Increase your Jump and Long Jump Capabilities
by +1 each.`},
"Art of Stealth" : {
"name" : "Art of Stealth",
"category" : "Other",
"desc" : `Prerequisites: Expert Stealth
Effect: You gain the Stealth Capability.`},
"elemental connection" : {
"name" : "Elemental Connection",
"category" : "Other",
"desc" : `Prerequisites: None
Effect: Choose an Elemental Type. You gain a +2 bonus
to Charm, Command, Guile, Intimidate, and Intuition
Checks targeting Pokémon of that Type. You may not
take Elemental Connection if you have the Mystic
Senses Edge, and you may not take Mystic Senses if you
have Elemental Connection.`},
"instinctive aptitude" : {
"name" : "Instinctive Aptitude",
"category" : "Combat",
"desc" : `Prerequisites: Adept Intuition
Effect: Whenever you spend AP to raise your roll on
an Accuracy Roll or Skill Check, you get a +2 bonus
instead of +1. This cannot be used on Rolls made by
your Pokémon.`},
"instruction" : {
"name" : "Instruction",
"category" : "Combat",
"desc" : `Prerequisites: Novice General Education
Effect: Whenever you aid an ally in an Assisted Skill
Check using an Education Skill you have at Novice
Rank or higher, add your full Rank value as a bonus to
their roll instead of half.`},
"iron mind" : {
"name" : "Iron Mind",
"category" : "Other",
"desc" : `Prerequisites: Novice Focus
Effect: You become aware of all attempts to read your
mind with Telepathy, whether the attempt is successful
or not.`},
"medic training" : {
"name" : "Medic Training",
"category" : "Other",
"desc" : `Prerequisites: Novice Medicine Education
Effect: When you use Restorative Items on others, they
do not forfeit their next turn.`},
"mounted prowess" : {
"name" : "Mounted Prowess",
"category" : "Other",
"desc" : `Prerequisites: Novice Acrobatics or Athletics
Effect: You automatically succeed at Acrobatics and
Athletics Checks made to mount a Pokémon, and you
gain a +3 Bonus to all Acrobatics and Athletics Checks
made to remain Mounted.`},
"mystic senses" : {
"name" : "Mystic Senses",
"category" : "Other",
"desc" : `Prerequisites: Novice Intuition
Effect: You may use Intuition instead of Charm to
improve the disposition of Wild Pokémon. You may not
take Mystic Senses if you have the Elemental Connection
Edge, and you may not take Elemental Connection if
you have Mystic Senses.`},
"poképsychologist" : {
"name" : "PokéPsychologist",
"category" : "Other",
"desc" : `Prerequisites: Novice Pokémon Education
Effect: You may use your Pokémon Education Skill
instead of Charm, Guile, Intimidate, or Intuition when
making general Skill checks to interact with Pokémon
or to raise or lower disposition.`},
"power boost" : {
"name" : "Power Boost",
"category" : "Other",
"desc" : `Prerequisites: Expert Athletics
Effect: Increase your Power Capability by +2`},
"scholar" : {
"name" : "Scholar",
"category" : "Other",
"desc" : `Prerequisites: Expert General Education
Effect: You gain a +1 Bonus to Skill Checks with General
Education, Medicine Education, Occult Education,
Pokémon Education, Technology Education, and
Survival.`},
"swimmer" : {
"name" : "Swimmer",
"category" : "Other",
"desc" : `Prerequisites: Novice Athletics or Survival
Effect: You gain a +2 bonus to your Swim Speed. You
may spend X minutes underwater before you begin to
suffocate, where X is the higher of your Athletics or
Survival Ranks.`},
"traveler" : {
"name" : "Traveler",
"category" : "Other",
"desc" : `Prerequisites: Novice Survival
Effect: You may use Survival instead of Athletics and
Acrobatics to determine your Power Capability, High
Jump, and Long Jump values. Determine your Overland
Movement by substituting your Survival Rank for the
lower of your Athletics or Acrobatics Rank.`},
"wallrunner" : {
"name" : "Wallrunner",
"category" : "Other",
"desc" : `Prerequisites: Expert Acrobatics
Effect: You may run on vertical surfaces both vertically
and horizontally for up to your Acrobatics Rank in
meters before jumping off.`},
};
const error = {
    "non_existent_edge": "**That edge couldn't be found**"
}
module.exports = {
    "edge_dictionary" : edge_dictionary,
    "error" : error
}