class Quiz < ActiveRecord::Base
    attr_accessible :q1, :q2, :q3, :q4, :q5
    
    belongs_to :user
    
    def self.question
        ["Which is not an advantage of using a closure?",
        "To create a columned list of twoline email subjects and dates for a masterdetail view, which is the most semantically correct?",
        "To pass an array of strings to a function, you should not use...",
        "____ and ____ would be the HTML tags you would use to display a menu item and its description.",
        "Given <div id=\"outer\"><div class=\"inner\"></div></div>, which of these two is the most performant way to select the inner div?"]
    end
    
    def self.q1_answerA
        "Prevent pollution of global scope"
    end
    
    def self.q1_answerB
        "Encapsulation"
    end
    
    def self.q1_answerC
        "Private properties and methods"
    end
    
    def self.q1_answerD
        "Allow conditional use of 'strict mode'" 
    end

end
