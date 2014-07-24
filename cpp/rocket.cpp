#include <iostream>
using namespace std;

class Rocket
{
  int gas;
  int speed;
public:
  Rocket(int x);
  void accelerate();
};

Rocket::Rocket(int x) : gas(x), speed(0) {}

void Rocket::accelerate()
{
  if(gas >= 2) {
    speed += 2;
    gas -= 2;
    cout << "current gas: " << gas << endl;
    cout << "current speed: " << speed << endl;
  }
  else {
    cout << "no gas..." <<endl;
  }
}

int main()
{
  cout << "input int: " <<endl;
  int n;
  cin >> n;

  Rocket dive(n);

  cout << "accelerating" <<endl;
  dive.accelerate();
}

