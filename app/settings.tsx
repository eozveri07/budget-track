import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SectionCard from "@/components/Settings/SectionCard";

export default function Settings() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{t("common.settings")}</Text>
      </View>

      <SectionCard title={t("settings.system")}>
        <TouchableOpacity style={styles.settingItem} onPress={toggleLanguage}>
          <View style={styles.settingLeft}>
            <Ionicons name="language" size={24} color="white" />
            <Text style={styles.settingText}>{t("common.language")}</Text>
          </View>
          <Text style={styles.settingValue}>
            {i18n.language === "tr" ? "Türkçe" : "English"}
          </Text>
        </TouchableOpacity>
      </SectionCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
  },
  content: {
    padding: 10,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingText: {
    fontSize: 14,
    color: "white",
  },
  settingValue: {
    fontSize: 14,
    color: "rgba(255,255,255,0.6)",
  },
});
