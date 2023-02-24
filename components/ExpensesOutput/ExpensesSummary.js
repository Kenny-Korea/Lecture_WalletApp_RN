import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); // 두 번째 인자: 시작값

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      {/* toFixed(): 해당 값이 소수점 이하 두 자리 값으로 출력되게 하는 JS내장함수 */}
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});

export default ExpensesSummary;
