class state
{
    constructor()
    {

    }
    getState()
    {
        var stateRef=database.ref('State');
        stateRef.on("value",function(data)
        {
            State=data.val();
        })
    }
    update(tate)
    {
        database.ref('State').update({
            State:tate
        })
    }
    start()
    {
        if(State===0)
        {
            //player=new Player();
            //player.getCount();
            form=new Questions();
            form.display();
        }
    }
}