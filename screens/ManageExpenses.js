import { StyleSheet, Text, View } from "react-native";

const ManageExpenses = () => {
  return (
    <View style={styles.ManageExpensesContainer}>
      <Text>ManageExpenses</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ManageExpensesContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ManageExpenses;
