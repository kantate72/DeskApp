class Quiz < ActiveRecord::Base
    attr_accessible :q1, :q2, :q3, :q4, :q5
    
    belongs_to :user
    
    def self.question
        [{"question"=>"Which is not an advantage of using a closure?","answers"=>{"answerA"=>"Prevent pollution of global scope", "answerB"=>"Encapsulation", "answerC"=>"Private properties and methods", "answerD"=>"Allow conditional use of 'strict mode'"}},
        {"q2"=>"To create a columned list of twoline email subjects and dates for a masterdetail view, which is the most semantically correct?"},
        {"q3"=>"To pass an array of strings to a function, you should not use..."},
        {"q4"=>"____ and ____ would be the HTML tags you would use to display a menu item and its description."},
        {"q5"=>"Given <div id=\"outer\"><div class=\"inner\"></div></div>, which of these two is the most performant way to select the inner div?"}]
    end

end
