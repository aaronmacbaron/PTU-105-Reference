const feature_dictionary = {
"command versatility" : {
"name" : "Command Versatility",
"category" : "Raising and Battling",
"desc" : `Prerequisites: Adept Command, Guile, or Pokémon Education
1 AP – Free Action
Trigger: Your Pokémon takes its turn.
Effect: Your Pokémon may give up use of a Scene or
Daily Move to regain use of a Scene or Daily Move
which it has already used. Your Pokémon may give up
use of a Daily Move to regain use of a Scene Move, but
not vice-versa. You may use Command Versatility only
once per Scene per Pokémon.`},
"press" : {
"name" : "Press",
"category" : "Raising and Battling",
"desc" : `Prerequisites: Adept Intimidate
At-Will – Standard Action
Target: Your own Pokémon.
Effect: You hit your Pokémon, and they lose 1/6th of
their Max Hit Points and are cured of Sleep. Raise any
two of their Stats by +1 CS each, and you may add half
of your Intimidate Rank to any Skill Checks made this
round to make this Pokémon obey orders. Using Press
on a Pokémon may make them dislike you.`},
"quick switch" : {
"name" : "Quick Switch",
"category" : "Raising and Battling",
"desc" : `Prerequisites: Novice Acrobatics or Novice Guile
2 AP – Free Action
Trigger: Your Pokémon Faints; or an opponent sends
out a Pokémon
Effect: You may return and send out a Pokémon as a
Free Action. You may perform this Feature on your turn
without a Trigger. Pokémon sent out by Quick Switch
cannot trigger another trainer’s Quick Switch. When
you swap Pokémon using Quick Switch, you do not lose
a Pokémon turn.`},
"species savant" : {
"name" : "Species Savant",
"category" : "Raising and Battling",
"desc" : `Prerequisites: 3 different individual Pokémon of the same evolutionary line.
Static
Effect: When you take Species Savant, choose a single
Evolutionary Family. Your Pokémon of your Chosen
Evolutionary Family have each of their Base Stats
increased by +1.`},
"tutoring" : {
"name" : "Tutoring",
"category" : "Raising and Battling",
"desc" : `Prerequisites: Novice General Education, Special (See Effect)
One Time Use x 3 – Extended Action
Effect: When activating this Feature, select a Move
known either by yourself or by 3 Pokémon you own.
This Move is Mastered. As an Extended Action, you
may have Pokémon spend 2 Tutor Points to learn a
Move you have Mastered. Pokémon targeted this way
can only learn Moves that they could learn by Level Up,
TM, Egg Move, or Move Tutor. You may take Tutoring
multiple times, each time gaining 3 uses of the Feature.
Note: To be clear, this Feature lets you choose a total of
three different Moves you can Tutor. The use limitation
isn’t on how often you can Tutor them; once you have
Mastered a Move, you can Tutor it At-Will.`},
"agility training" : {
"name" : "Agility Training",
"category" : "Training",
"desc" : `Prerequisites: Novice Athletics, Untrained Command
At-Will – Special
Effect: The target becomes Agile until the end of the
effect duration. Agile Pokémon gain a +1 bonus to
Movement Capabilities and +4 to Initiative.`},
"brutal training" : {
"name" : "Brutal Training",
"category" : "Training",
"desc" : `Prerequisites: Novice Intimidate, Untrained Command
At-Will – Special
Effect: The target becomes Brutal until the end of the
effect duration. Brutal Pokémon increase the CriticalHit and Effect Range of all attacks by +1.`},
"focused training" : {
"name" : "Focused Training",
"category" : "Training",
"desc" : `Prerequisites: Novice Command
At-Will – Special
Effect: The target becomes Focused until the end of the
effect duration. Focused Pokémon gain a +1 bonus to
Accuracy Rolls and +2 to Skill Checks.`},
"inspired training" : {
"name" : "Inspired Training",
"category" : "Training",
"desc" : `Prerequisites: Novice Charm, Untrained Command
At-Will – Special
Effect: The target becomes Inspired until the end of the
effect duration. Inspired Pokémon gain a +1 bonus to
Evasion and +2 to Save Checks.`},
"commander’s voice" : {
"name" : "Commander’s Voice",
"category" : "Orders",
"desc" : `Prerequisites: Two Features with the [Orders] tag
Static
Effect: You may give two different [Orders] as a single
Standard Action, or you may give one set of [Orders] as
a Swift Action.
Special: If this is used to use Focused Command and
another [Order] that has targets, the second Order
applies to both Pokémon you are commanding that
turn. Commander’s Voice doesn’t allow you to use
Focused Command as a Swift Action.`},
"focused command" : {
"name" : "Focused Command",
"category" : "Orders",
"desc" : `Prerequisites: Master Command, one of Focus, Guile,
Intimidate, or Pokémon Education at Expert
At-Will – Standard Action + Swift Action
Effect: You may have a second Pokémon take a turn this
round, but both Pokémon can only take At-Will actions
that round. Additionally, both Pokémon receive a -5
Penalty on all Damage Rolls. You may pay 1 AP at the
beginning of the round to lift the Frequency Restriction
OR the Damage Penalty for the remainder of the round,
or pay 2 AP to lift both.
Note: Focused Command has no targets, which may be
relevant to certain Features which refer to [Orders]`},
"Ravager Orders" : {
"name" : "Ravager Orders",
"category" : "Orders",
"desc" : `Prerequisites: Expert Command or Intimidate
Static
Effect: You gain the Reckless Advance and Strike Again!
Orders.
Reckless Advance
[Orders] [Stratagem]
Bind 2 AP – Standard Action
Target: Your Pokémon
Effect: While this Feature is Bound, increase the
damage rolls of the target’s damaging melee attacks by
+8, and these attacks Trip targets on Accuracy Rolls of
18+. When the target of Reckless Advance hits with a
damaging melee attack, they become Vulnerable for one
full round.
Strike Again!
[Orders]
Scene – Standard Action
Target: Your Pokémon
Effect: The target may immediately take an additional
Standard Action to use an At-Will attack.`},
"marksman orders" : {
"name" : "Marksman Orders",
"category" : "Orders",
"desc" : `Prerequisites: Expert Perception or Guile
Static
Effect: You gain the Trick Shot and Long Shot Orders.
Trick Shot
[Orders] [Stratagem]
Bind 2 AP – Standard Action
Target: Your Pokémon
Effect: While this Feature is Bound, decrease the Accuracy Roll of the target’s damaging ranged attacks by -2.
The Critical Hit range of those attacks is increased by
+3. This Feature does not affect Moves without an AC
value.
Long Shot
[Orders]
Scene x2 – Standard Action
Target: Your Pokémon
Effect: The target’s damaging ranged attacks have their
range doubled until the end of their next turn, and deal
X additional damage. X is equal to the distance in meters
that the attack traveled. Long Shot does not increase the
size of area of effect attacks. If attacks altered by Long
Shot are Critical Hits, add the value of the Damage Dice
Roll an additional time to the total damage.
Orders, Training Features, and Trainer Classes
A number of Trainer Classes have their own Orders, or Features which are reliant on Orders and Training Features
to function. Because the effectiveness of using some of these Classes is often reliant on choosing other Orderrelated Features for them to use, we’re putting a list of all such Classes and their Features which are either Orders
or somehow synergize with Orders and Training Features in one place for you to easily browse.
Ace Trainer: Elite Trainer, Critical Moment
Channeler: Battle Synchronization, Spirit Boost
Cheerleader: Cheerleader; Moment of Action; Go,
Fight, Win!
Commander: The entire Class
Coordinator: Decisive Director
Duelist: Expend Momentum, Directed Focus, Duelist’s
Manual
Chronicler: Targeted Profiling
Fashionista: Dress to Impress
Rider: Rider, Conqueror’s March
Stat Ace: Stat Stratagem
Survivalist: Wilderness Guide
Taskmaster: Taskmaster, Strike of the Whip
Type Ace: Type Refresh, Type-Specific Stratagems
Skills, Edges, Feats
62`},
"trickster orders" : {
"name" : "Trickster Orders",
"category" : "Orders",
"desc" : `Prerequisites: Expert Charm or Guile
Static
Effect: You gain the Capricious Whirl and Dazzling
Dervish Orders.
Capricious Whirl
[Orders] [Stratagem]
Bind 2 AP – Standard Action
Target: Your Pokémon
Effect: While this Feature is Bound, the target has a +3
bonus to its Evasion but deals 5 less damage with all
damaging attacks.
Dazzling Dervish
[Orders]
Scene x2 – Standard Action
Target: Your Pokémon
Effect: Until the end of their next turn, the target adds
their non-stat Evasion to their Movement Capabilities
and whenever they attack a foe or Shift through a square
occupied by a foe, that foe suffers a -3 penalty to all rolls
until the end of their next turn. This effect may only
affect a foe once per round.`},
"guardian orders" : {
"name" : "Guardian Orders",
"category" : "Orders",
"desc" : `Prerequisites: Expert Charm or Intimidate
Static
Effect: You gain the Brace for Impact and Sentinel
Stance Orders.
Brace for Impact
[Orders] [Stratagem]
Bind 2 AP – Standard Action
Target: Your Pokémon
Effect: While this Feature is Bound, once a round, when
the target uses a self-targeting Status Move, they may
gain 5 Damage Reduction until the end of their next
turn. They may also activate this effect as a Standard
Action.
Sentinel Stance
[Orders]
Scene x2 – Standard Action
Target: Your Pokémon
Effect: Until the end of your next turn, the target may
attempt to Intercept attacks for allies as a Shift Action. If
they do so, they gain 10 Damage Reduction against the
attack. If the target is also under the effect of Brace for
Impact, they may gain 5 Damage Reduction from it as if
they had used a self-targeting Status Move.`},
"precision orders" : {
"name" : "Precision Orders",
"category" : "Orders",
"desc" : `Prerequisites: Expert Command or Perception
Static
Effect: You gain the Pinpoint Strike and Perfect Aim
Orders.
Pinpoint Strike
[Orders] [Stratagem]
Bind 2 AP – Standard Action
Target: Your Pokémon
Effect: Increase the Accuracy and Effect Range of the
target’s damaging attacks by +2. These attacks deal 5 less
damage, before applying weakness and resistance.
Perfect Aim
[Orders]
Scene x2 – Standard Action
Target: Your Pokémon
Effect: The next damaging attack the target performs
before the end of your next turn automatically hits and
ignores Defensive Abilities but deals damage as if it were
resisted one step further than normal. You may still roll
to trigger any Effect Ranges or Critical Hits. All targets
of the attack may not activate any Blessings in response,
and the attack may not be Intercepted or avoided in any
way (ex: with Dodge, Shield Moves, etc).`},
"first aid expertise" : {
"name" : "First Aid Expertise",
"category" : "Other",
"desc" : `Prerequisites: Medic Training, Expert Medicine
Education
Daily x3 – Extended Action
Target: Pokemon or Trainers
Effect: The target may remove one Injury, has all Hit
Points restored, and is cured of all Status Afflictions.
You may use First Aid Expertise only once per day per
target. First Aid Expertise requires access to a First Aid
Kit.`},
"let me help you with that" : {
"name" : "Let Me Help You With That",
"category" : "Other",
"desc" : `Prerequisites: None
Daily x3 – Full Action, Interrupt
Trigger: An allied Trainer fails a Skill Check in a Skill
you have Ranked at Novice or higher.
Effect: The ally may re-roll the Skill Check with a Bonus
equal to your Skill Rank.`},
"poke ball crafter" : {
"name" : "Poké Ball Crafter",
"category" : "Other",
"desc" : `Prerequisites: Basic Balls, Poké Ball Repair, Expert
Technology
Static
Effect: You may craft Dusk, Dive, Heal, Luxury, Net,
Nest, Quick, Repeat, or Timer Balls for $700. Requires
access to a Poké Ball Tool Box.`},
"pokeManiac" : {
"name" : "PokéManiac",
"category" : "Other",
"desc" : `Prerequisites: Adept Pokémon Education
At-Will – Standard Action
Target: A Pokémon
Effect: Make a Pokemon Education Check with a DC
of 10. If you succeed, you determine the target’s Level,
Types, Nature, and Abilities.`},
"psionic sight" : {
"name" : "Psionic Sight",
"category" : "Other",
"desc" : `[+Special Defense]\rPrerequisites: Elemental Connection (Psychic)
Static
Effect: You are able to visibly see any Psychic Residue
left on Humans or Pokémon due to the effects of Psionic
abilities. Each Human or Pokémon leaves distinct
Psychic Residue on their targets; you are easily able
to distinguish which targets have been affected by the
same Psionic, though to identify that Psionic you need
to have a way of knowing their signature (such as simply
seeing them do it, and seeing the resulting signature).`},
"skill monkey" : {
"name" : "Skill Monkey",
"category" : "Other",
"desc" : `Prerequisites: Three Skills at Adept Rank or higher
Daily x3 – Free Action
Trigger: You make a Skill Check
Effect: You may re-roll the triggering Skill Check with
a +2 Bonus, taking the new result. This Feature may be
used to re-roll a specific roll only once.`},
"blur" : {
"name" : "Blur",
"category" : "Combat",
"desc" : `
[+Speed]
Prerequisites: Expert Acrobatics, Expert Stealth
Static
Effect: Attacks and Moves targeting you that don’t
require an Accuracy Check now require one, as though
they had Accuracy Check of 2. You may only apply half
of your Evasion to these Attacks and Moves.`},
"defender" : {
"name" : "Defender",
"category" : "Combat",
"desc" : `
[+HP]
Prerequisites: Adept Athletics
Static
Effect: Using the Intercept Maneuvers requires only a
Shift Action Interrupt.`},
"dive" : {
"name" : "Dive",
"category" : "Combat",
"desc" : `
[+Speed]
Prerequisites: Adept Acrobatics
Scene x2 – Shift Action, Interrupt
Trigger: You are targeted by a Ranged 1-Target Attack,
or are in a Cone, Burst, Blast, or Line.
Effect: You may immediately Shift 1 Meter, and then
become Tripped. This Feature cannot be used if you are
Stuck, Grappled, or otherwise impaired from Shifting.
This Feature causes you to dodge Ranged attacks aimed
at you, and may let you avoid Cones, Bursts, Blasts, or
Lines if the shift removes you from the area of effect.`},
"fighter’s versatility" : {
"name" : "Fighter’s Versatility",
"category" : "Combat",
"desc" : `
[+Any Stat]
Prerequisites: Learned two Scene or Daily Moves.
Scene – Free Action
Trigger: You gain Initiative.
Effect: You may give up use of a Scene or Daily Move
to regain use of a Scene or Daily Move which you have
already used. You may give up use of a Daily Move to
regain use of a Scene Move, but not vice-versa.`},
"multi-tasking" : {
"name" : "Multi-Tasking",
"category" : "Combat",
"desc" : `
[+Speed]
Prerequisites: 20 Speed Stat, Master Acrobatics
Scene x2 – Swift Action
Effect: You may take two Standard Actions instead of
one this turn, but both actions must have an At-Will
Frequency.`},
"signature move" : {
"name" : "Signature Move",
"category" : "Combat",
"desc" : `
[+Any Stat]
Prerequisites: Learned four Moves.
Static
Effect: Choose a Move you know. Increase the Move’s
Frequency one step, as if you had used a PP Up. This
choice cannot be changed once made. This Feature may
not select Moves known through temporary means, nor
can these Moves be used to qualify for this Feature.`},
"type expertise" : {
"name" : "Type Expertise",
"category" : "Combat",
"desc" : `
[Ranked 2] [+Any Stat]
All Ranks Prerequisites: Level 9, 3 Moves of the Chosen
Type in your Move List
Static
Effect: Each Rank, choose a Type of which you know
at least 3 Moves. You gain STAB for the chosen Type.
STAB is never applied to Struggle Attacks.`},
"walk it off" : {
"name" : "Walk It Off",
"category" : "Combat",
"desc" : `
[+HP]
Prerequisites: Adept Athletics, Novice Focus
Daily – Extended Action
Effect: Remove one Injury from yourself and regain
1/4th of your maximum Hit Points. This Injury removal
doesn’t count against the natural healing limit on
Injuries each day`},
};
const feature_error = {"non_existent_error" : "**That feature could not be found.**"};
module.exports = {
    "feature_dictionary" : feature_dictionary,
    "error" : feature_error
};