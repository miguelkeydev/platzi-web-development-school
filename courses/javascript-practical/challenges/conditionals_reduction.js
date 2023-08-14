if (subscriptionType == 'Free') {
  console.log("You can only take the free courses");
} else if (subscriptionType == 'Basic') {
  console.log("You can take almost all the Platzi courses for one month");
} else if (subscriptionType == 'Expert') {
  console.log("You can take almost all the Platzi courses for one year");
} else if (subscriptionType == 'ExpertDuo') {
  console.log("You and somebody else can take ALL the Platzi courses for one year");
}

// Replicate the previous code, but only using "if" (without "else" or "else if")

function getSubscriptionType(suscription) {
  if (suscription == 'Free') {
    console.log("You can only take the free courses");
    return;
  } 
  if (suscription == 'Basic') {
    console.log("You can take almost all the Platzi courses for one month");
    return;
  }
  if (suscription == 'Expert') {
    console.log("You can take almost all the Platzi courses for one year");
    return;
  }
  if (suscription == 'ExpertDuo') {
    console.log("You and somebody else can take ALL the Platzi courses for one year");
    return;
  }
  console.warn("This subscription is unknown");
}

// Replicate the previous code, using arrays and using only one single "if"

let subscriptions = ['Free', 'Basic', 'Expert', 'ExpertDuo']
let subscriptionsPermissions = ['You can only take the free courses', 'You can take almost all the Platzi courses for one month', 'You can take almost all the Platzi courses for one year', 'You and somebody else can take ALL the Platzi courses for one year', 'This subscription is unknown']

function getSubscriptionType(subscription) {
  for (let i = 0; i < subscriptions.length; i++) {
    if (subscription === subscriptions[i]) {
      console.log(subscriptionsPermissions[i]);
      return;
    }
  }
  console.warn(subscriptionsPermissions[4]);
}

// Replicate the previous code, using objects and using only one single "if"

subscriptions = {
  free: 'You can only take the free courses',
  basic: 'You can take almost all the Platzi courses for one month',
  expert: 'You can take almost all the Platzi courses for one year',
  expertduo: 'You and somebody else can take ALL the Platzi courses for one year'
};

function getSubscriptionType(subscription) {
  if (subscriptions[subscription]) {
    console.log(subscriptions[subscription]);
    return;
  }
  console.warn("This subscription is unknown");
}