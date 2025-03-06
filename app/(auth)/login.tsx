import styles from "@/styles/auth.styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constanst/theme";

export default function login() {
  return (
    <View style={styles.container}>
      {/* Brand section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>

        <Text style={styles.appName}>Spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
      </View>

      {/* image section / illustaration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/Secure-login-bro.png")}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>

      {/* Login section */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          activeOpacity={0.7}
          onPress={() => console.log("Hello")}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to out Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
