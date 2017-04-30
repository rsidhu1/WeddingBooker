import React from "React";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import CategoryView from "../screens/CategoryView";
import VendorListView from "../screens/VendorListView";
import VendorProfile from "../screens/VendorProfile";
import Chat from "../components/Messenger/Chat";
import Bookings from "../screens/Bookings";
import Messages from "../screens/Messages";
import Settings from "../screens/Settings";
import { fetchLocation } from "../components/Geolocation/GeoLocation";

const customTabStyle = {
  // styling/Options for the tab navigator
  tabBarOptions: {
    activeTintColor: "grey",
    showIcon: true,
    labelStyle: {
      fontSize: 12,
      color: "grey"
    },
    style: {
      backgroundColor: "white"
    }
  },
  tabBarPosition: "bottom"
};

const customStackStyle = {
  //styling/Options for the stack navigator
  navigationOptions: {
    header: {
      style: {
        backgroundColor: "#f88379",
        justifyContent: "center"
      },
      titleStyle: {
        color: "white",
        justifyContent: "center"
      }
    }
  }
};

export const SettingStack = StackNavigator(
  {
    //setting stack created to add navigation Title
    Setting: {
      screen: Settings,
      navigationOptions: {
        title: "Settings"
      }
    }
  },
  customStackStyle
);

export const MessageStack = StackNavigator(
  {
    //message stack created to add navigation Title
    Setting: {
      screen: Messages,
      navigationOptions: {
        title: "Messages"
      }
    }
  },
  customStackStyle
);
export const BookingStack = StackNavigator(
  {
    //booking stack created to add navigation Title
    Setting: {
      screen: Bookings,
      navigationOptions: {
        title: "Bookings"
      }
    }
  },
  customStackStyle
);

//Switch Through Category Views
export const CategoryStack = StackNavigator(
  {
    CategoryView: {
      screen: CategoryView,
      navigationOptions: {
        title: "Categories"
      }
    },
    VendorListView: {
      screen: VendorListView,
      navigationOptions: {
        title: "Vendors"
      }
    },
    VendorProfile: {
      screen: VendorProfile,
      navigationOptions: {
        title: "Profile"
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        title: "Chat"
      }
    }
  },
  customStackStyle
);

//bottom tab
export const Tabs = TabNavigator(
  {
    CategoryView: {
      screen: CategoryStack,
      navigationOptions: {
        title: "Vendors",
        label: "Vendors",
        tabBar: {
          icon: () => <Icon name="store" size={25} color={"grey"} />
        }
      }
    },
    Bookings: {
      screen: BookingStack,
      navigationOptions: {
        label: "Bookings",
        tabBar: {
          icon: () => <Icon name="list" size={25} color={"grey"} />
        }
      }
    },
    Messages: {
      screen: MessageStack,
      navigationOptions: {
        label: "Messages",
        tabBar: {
          icon: () => (
            <Icon name="chat-bubble-outline" size={25} color={"grey"} />
          )
        }
      }
    },
    Settings: {
      screen: SettingStack,
      navigationOptions: {
        label: "Settings",
        tabBar: {
          icon: () => <Icon name="settings" size={25} color={"grey"} />
        }
      }
    }
  },
  customTabStyle
);
