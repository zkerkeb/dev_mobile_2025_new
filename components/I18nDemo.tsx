import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/**
 * Composant pédagogique pour démontrer les fonctionnalités d'i18next
 *
 * Techniques démontrées:
 * 1. Changement de langue dynamique
 * 2. Interpolation de variables
 * 3. Pluralisation (singulier/pluriel)
 * 4. Contexte (ex: genre)
 * 5. Clés imbriquées
 * 6. Formatage
 */
const I18nDemo = () => {
  const { t, i18n } = useTranslation();
  const [itemCount, setItemCount] = useState(0);
  const [messageCount, setMessageCount] = useState(1);
  const [gender, setGender] = useState<'male' | 'female'>('male');
console.log('Current language:', i18n);
  // Fonction pour changer de langue
  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <ThemedView style={styles.container}>
      {/* Titre */}
      <ThemedText type="title" style={styles.title}>
        {t('i18nDemo.title')}
      </ThemedText>

      {/* Section 1: Changement de langue */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          1. {t('i18nDemo.changeLanguage')}
        </ThemedText>
        <ThemedText style={styles.code}>
          {t('i18nDemo.currentLanguage', { lang: i18n.language.toUpperCase() })}
        </ThemedText>
        <TouchableOpacity style={styles.button} onPress={toggleLanguage}>
          <ThemedText style={styles.buttonText}>
            {i18n.language === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
          </ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.codeHint}>
          {'i18n.changeLanguage("en")'}
        </ThemedText>
      </ThemedView>

      {/* Section 2: Texte simple */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          2. Simple text
        </ThemedText>
        <ThemedText>{t('i18nDemo.simpleText')}</ThemedText>
        <ThemedText style={styles.codeHint}>{'t("i18nDemo.simpleText")'}</ThemedText>
      </ThemedView>

      {/* Section 3: Interpolation */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          3. {t('i18nDemo.interpolation.title')}
        </ThemedText>
        <ThemedText>{t('i18nDemo.interpolation.hello', { name: 'John' })}</ThemedText>
        <ThemedText>
          {t('i18nDemo.interpolation.welcome', { appName: 'MyApp', userName: 'Zaki' })}
        </ThemedText>
        <ThemedText style={styles.codeHint}>
          {'t("key", { name: "John" })'}
        </ThemedText>
      </ThemedView>

      {/* Section 4: Pluriels */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          4. {t('i18nDemo.plurals.title')}
        </ThemedText>

        {/* Compteur d'items */}
        <ThemedView style={styles.counterRow}>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => setItemCount(Math.max(0, itemCount - 1))}
          >
            <ThemedText style={styles.buttonText}>-</ThemedText>
          </TouchableOpacity>
          <ThemedText style={styles.pluralText}>
            {t('i18nDemo.plurals.item', { count: itemCount })}
          </ThemedText>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => setItemCount(itemCount + 1)}
          >
            <ThemedText style={styles.buttonText}>+</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Compteur de messages */}
        <ThemedView style={styles.counterRow}>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => setMessageCount(Math.max(0, messageCount - 1))}
          >
            <ThemedText style={styles.buttonText}>-</ThemedText>
          </TouchableOpacity>
          <ThemedText style={styles.pluralText}>
            {t('i18nDemo.plurals.message', { count: messageCount })}
          </ThemedText>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => setMessageCount(messageCount + 1)}
          >
            <ThemedText style={styles.buttonText}>+</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedText style={styles.codeHint}>
          {'t("key", { count: 5 })'}
        </ThemedText>
        <ThemedText style={styles.codeHint}>
          {'// keys: key_zero, key_one, key_other'}
        </ThemedText>
      </ThemedView>

      {/* Section 5: Contexte (genre) */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          5. {t('i18nDemo.context.title')}
        </ThemedText>
        <ThemedText>{t('i18nDemo.context.friend', { context: gender })}</ThemedText>
        <View style={styles.genderButtons}>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.genderButtonActive]}
            onPress={() => setGender('male')}
          >
            <ThemedText style={styles.buttonText}>Male</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.genderButtonActive]}
            onPress={() => setGender('female')}
          >
            <ThemedText style={styles.buttonText}>Female</ThemedText>
          </TouchableOpacity>
        </View>
        <ThemedText style={styles.codeHint}>
          {'t("friend", { context: "male" })'}
        </ThemedText>
        <ThemedText style={styles.codeHint}>
          {'// keys: friend_male, friend_female'}
        </ThemedText>
      </ThemedView>

      {/* Section 6: Clés imbriquées */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          6. {t('i18nDemo.nested.title')}
        </ThemedText>
        <ThemedText>{t('i18nDemo.nested.level1.level2.deep')}</ThemedText>
        <ThemedText style={styles.codeHint}>
          {'t("i18nDemo.nested.level1.level2.deep")'}
        </ThemedText>
      </ThemedView>

      {/* Section 7: Formatage */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          7. {t('i18nDemo.formatting.title')}
        </ThemedText>
        <ThemedText>
          {t('i18nDemo.formatting.price', { value: 1234.56 })}
        </ThemedText>
        <ThemedText>
          {t('i18nDemo.formatting.date', {
            date: new Date().toLocaleDateString(i18n.language)
          })}
        </ThemedText>
        <ThemedText style={styles.codeHint}>
          {'t("price", { value: 1234.56 })'}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  code: {
    marginVertical: 4,
  },
  codeHint: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'monospace',
    opacity: 0.6,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    gap: 12,
  },
  smallButton: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pluralText: {
    minWidth: 150,
    textAlign: 'center',
  },
  genderButtons: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 8,
  },
  genderButton: {
    flex: 1,
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  genderButtonActive: {
    backgroundColor: '#007AFF',
  },
});

export default I18nDemo;
