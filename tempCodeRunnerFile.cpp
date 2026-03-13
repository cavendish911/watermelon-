#include <iostream>
using namespace std;

int main() {
    float carbohydrates,fats,protien,totalcalories;
    cout<<"enter carbohydrates";
    cin>>carbohydrates;
    cout<<"enter fats ";
    cin>>fats;
    cout<<"Enter protien";
    cin>>protien;
    totalcalories=3*carbohydrates+15*fats+6*protien;
    cout<<"totalcalories="<<totalcalories;
    
}