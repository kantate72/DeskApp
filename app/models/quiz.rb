class Quiz < ActiveRecord::Base
    attr_accessible :q1, :q2, :q3, :q4, :q5
    
    belongs_to :user
    
    def self.question
        [{"question"=>"Which is not an advantage of using a closure?","answers"=>["Prevent pollution of global scope","Encapsulation","Private properties and methods","Allow conditional use of 'strict mode'"]},
        {"question"=>"To create a columned list of twoline email subjects and dates for a masterdetail view, which is the most semantically correct?","answers"=>["<div>+<span>", "<tr>+<td>", "<ul>+<li>", "<p>+<br>'", "none of these", "all of these"]},
        {"question"=>"To pass an array of strings to a function, you should not use...","answers"=>["fn.apply(this, stringsArray)", "fn.call(this, stringsArray)", "fn.bind(this, stringsArray)"]},
        {"question"=>"____ and ____ would be the HTML tags you would use to display a menu item and its description.","answers"=>["Prevent pollution of global scope", "Encapsulation", "Private properties and methods", "Allow conditional use of 'strict mode'"]},
        {"question"=>"Given <div id=\"outer\"><div class=\"inner\"></div></div>, which of these two is the most performant way to select the inner div?","answers"=>["getElementById(\"outer\").children[0]", "getElementsByClassName(\"inner\")[0]"]}]
    end

end
