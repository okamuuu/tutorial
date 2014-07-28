#include <iostream>
using namespace std;

class Glass
{
    int water;
public:
    Glass() : water(10) {}
    void discharge();
};

void Glass::discharge() {
  water -= 2;
  cout << "discharging" <<endl;
  cout << "rest: " << water <<endl;
}

int main()
{
    Glass glass;
    cout << "create glass" <<endl;
    cout << "discharging water" <<endl;
    glass.discharge();
    glass.discharge();
    glass.discharge();
    cout << "end" <<endl;
}
