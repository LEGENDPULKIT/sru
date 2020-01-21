class QUE1
{
    constructor()
    {

    }
    update(Ans)
    {
        var playerIndex="Question"+playerCount;
        database.ref(playerIndex).set({
            Answers:Ans
        })
    }
}