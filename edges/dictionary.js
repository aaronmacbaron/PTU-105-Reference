const edge_dictionary = {
"basic skills" : {
    "name" : "Basic Skills",
    "category" : "Skill",
    "desc" :`
**Basic Skills**
Prerequisites: None
Effect: You Rank Up a Skill from Pathetic to Untrained,
or Untrained to Novice. You may take this Edge multiple
times.`},
"adept skills" : {
    "name": "Adept Skills",
    "category" : "Skill",
    "desc" :`
**Adept Skills**
Prerequisites: Level 2
Effect: You Rank Up a Skill from Novice to Adept. You
may take this Edge multiple times.`},
"expert skills" : {
    "name": "Expert Skills",
    "category" : "Skill",
    "desc" :`
**Expert Skills**
Prerequisites: Level 6
Effect: You Rank Up a Skill from Adept to Expert. You
may take this Edge multiple times.`},
"master skills" : {
    "name": "Master Skills",
    "category" : "Skill",
    "desc" :`
**Master Skills**
Prerequisites: Level 12
Effect: You Rank Up a Skill from Expert to Master. You
may take this Edge multiple times.`},
"skill stunt" : {
    "name": "Skill Stunt",
    "category" : "Skill",
    "desc" :`
**Skill Stunt**
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
**Categoric Inclination**
Prerequisites: None
Effect: Choose Body, Mind, or Spirit. You gain a +1
Bonus to all Skill Checks of that Category`
},
"skill enhancement" : {
    "name": "Skill Enhancement",
    "category" : "Skill",
    "desc" :`
**Skill Enhancement**
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
**Virutoso**
Prerequisites: A Skill at Master Rank, Level 20
Effect: Choose a Skill at Master Rank. Consider that Skill
to be effectively “Rank 8” for any Features or effects that
depend on Skill Rank. Virtuoso may be taken multiple
times, but you must choose a different Skill each time.`
},
"apricorn balls" : {
    "name": "Apricorn Balls",
    "category" : "Crafting",
    "desc" :`
**Apricorn Balls**
Prerequisites: Novice Survival or Adept Technology Education
Effect: As an Extended Action, you may craft Apricorns
into their corresponding Poké Ball. Use of this Feature
requires access to a Poké Ball Tool Box. `
}
};
const error = {
    "non_existent_edge": "**That edge couldn't be found**"
}
module.exports = {
    "edge_dictionary" : edge_dictionary,
    "error" : error
}