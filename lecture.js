//Jon's stats
jonSnowAttack = 50;
jonSnowHealth = 100;
jonSnowDefense = 0;

//Jamie's stats
jamieLannisterAttack = 90;


if (jonSnowAttack > jamieLannisterAttack)
{
    console.log("Jon Snow has better attack than Jamie Lannister");
}
else if (jonSnowAttack === jamieLannisterAttack)
{
    console.log("Jon Snow and Jamie Lannister have the same attack power");
}
else
{
    console.log("Jamie Lannister has better attack than Jon Snow");
}

if (jonSnowHealth <= jamieLannisterAttack)
{
    console.log("Jon Snow has been killed");
}
else
{
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`);
}

//jon picks up a shield
jonSnowDefense += 25;

if (jonSnowHealth <= (jamieLannisterAttack - jonSnowDefense))
{
    console.log("Jon Snow has been killed");
}
else
{
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`);
}

//peseant throws Jon a med kit and he heals 50 health, his health cannot exceed 100
healthKit = 50;
jonSnowHealth += healthKit;
if (jonSnowHealth > 100)
{
    jonSnowHealth = 100;
}