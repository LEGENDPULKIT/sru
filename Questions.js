class Question
{
    constructor()
    {

    }
    display()
    {
        Text("Q1)Is CAA is good for our Nation ?",100,320)
        var inputAns=createInput("YES/NO");
        var button1=createButton('SUBMITT');


        var title=createElement('h2');
        title.html("Survey Report");
        title.position(430,0);

        var input=createInput("Email ID");
        var button=createButton('SUBMIT');
        input.position(550,160);
        button.position(620,200);

        button.mousePressed(function()
        {
            input.hide();
            button.hide();

            var emailId=input.value();
            VoterCounts+=1;
            Voters.update(emailId);
            Voters.updateCount(VoterCounts);
           
        })

        button1.mousePressed(function()
        {
            

            var Ans=inputAns.value();
        
            QUE1.update(Ans);
            
           
        })
    }
}