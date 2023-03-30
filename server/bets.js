const player = {points : 100, bet: 20}
const gameResult = 1 // import results from simulation results


function calculatePayout(player, gameResult){
    if(player.bet===0 || player.bet > player.points){
        return 0;
    }else if (gameResult === 1){
        const earnings = Math.ceil(player.bet * .25);
        player.points += earnings
        const payout = earnings + player.bet

        return Math.ceil(payout);
    } else{
        player.points-= player.bet;
        return 0
    }
}

console.log(calculatePayout(player, gameResult))
console.log(player)
