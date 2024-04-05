const int ledPin = 2;  // Define the LED pin
const int ledPin2 = 3; // Define the LED pin
const int ledPin3 = 4; // Define the LED pin

void setup() {
  pinMode(ledPin, OUTPUT); // Set the LED pin as an output
  pinMode(ledPin2, OUTPUT); // Set the LED pin as an output
  pinMode(ledPin3, OUTPUT); // Set the LED pin as an output

  Serial.begin(9600);
  while (Serial.available() <= 0) {
    Serial.println("0,0");
    delay(300);
  }
}

void loop() {
  while (Serial.available()) {
    int damage = Serial.parseInt();
    int maxDamage = Serial.parseInt();
    if (Serial.read() == '\n') {
      // perform actions based on received data from p5
      int sensor = analogRead(A0);
      delay(5);
      int sensor2 = digitalRead(A1);
      delay(5);
      Serial.print(sensor);
      Serial.print(',');
      Serial.println(sensor2);

      // Check if damage is between 1 and 4
      if (damage <= 4) {
        digitalWrite(ledPin3, HIGH); // Turn on the LED at pin 3
      } else {
        digitalWrite(ledPin3, LOW); // Turn off the LED at pin 3
      }

      // Check if damage is between 5 and 7
      if (damage >= 5 && damage <= 7) {
        digitalWrite(ledPin2, HIGH); // Turn on the LED at pin 2
      } else {
        digitalWrite(ledPin2, LOW); // Turn off the LED at pin 2
      }

      // Check if damage is between 8 and maxDamage
      if (damage >= 8 && damage <= maxDamage) {
        digitalWrite(ledPin, HIGH); // Turn on the LED at pin 2
      } else {
        digitalWrite(ledPin, LOW); // Turn off the LED at pin 2
      }
    }
  }
}

