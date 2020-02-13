import { sum } from '../utility/utilities';

const visible =
{
  isHeaderVisible: true
  , isSummaryVisible: true
  , isAddViewVisible: true
  , isToolBarVisible: true
  , isAccountView: true
  , isBtnAddViewVisible: true
}
const dataTheme = {
  light: ''
  , dark: 'dark'
  , theme: ''
  , acts_list_layout: 'list'
  , acts_card_layout: 'card'
  , acts_theme: ''
}

const dataGroceryTodo = [
  { id: 1, CategoryId: 1, Name: 'Eggs', Budget: 20.80, Price: 5.00 },
  { id: 2, CategoryId: 1, Name: 'Milk', Budget: 3.70, Price: 5.00 },
  { id: 3, CategoryId: 1, Name: 'Bread', Budget: 1.10, Price: 5.00 },
  { id: 4, CategoryId: 1, Name: 'Cheese', Budget: 4.99, Price: 5.00 },
  { id: 5, CategoryId: 1, Name: 'Cream Cheese', Budget: 3.95, Price: 5.00 },
  { id: 6, CategoryId: 1, Name: 'Platano', Budget: 3.00, Price: 5.00 },
  { id: 7, CategoryId: 1, Name: 'Rice', Budget: 8.77, Price: 5.00 },
  { id: 8, CategoryId: 1, Name: 'Beans', Budget: .99, Price: 5.00 }];

const AvailableFunds = [
  { id: 1, Name: "Gift Card", Balance: 352, BalanceDate: '12/02/2019', isActive: true }
  , { id: 2, Name: "Cash Savings", Balance: 840, BalanceDate: '12/02/2019', isActive: true }
  , { id: 3, Name: "Bacnk Acct", Balance: 542, BalanceDate: '12/02/2019', isActive: true }
  , { id: 4, Name: "Cash On Hand", Balance: 180, BalanceDate: '12/02/2019', isActive: true }
];

const SummaryTotals =
{
  TotalBalance: 0,
  CurrentBudget: 0
}
const Selections = {
  SelectedCategoryId: 0
}


const dataCollections = {
  dataTheme: dataTheme
  , AvailableFunds: AvailableFunds
  , dataGroceryTodo: dataGroceryTodo
  , AvailableFunds_NextId: 0
  , SummaryTotals: SummaryTotals
  , visible: visible,
  Selections: Selections
};

dataCollections.AvailableFunds_NextId = dataCollections.AvailableFunds.length + 1;

dataCollections.SummaryTotals.TotalBalance = Update_TotalBalance(dataCollections);
dataCollections.SummaryTotals.CurrentBudget = Update_CurrentBudget(dataCollections);

export default dataCollections;


function Update_TotalBalance(state) {

  state.SummaryTotals.TotalBalance = (state.AvailableFunds.filter(item => { return item.isActive === true }).length > 0)
    ? sum(state.AvailableFunds
      .filter(item => { return item.isActive === true })
      .map(item => parseInt(item.Balance)))
      .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : 0;


}

function Update_CurrentBudget(state) {
  return state.SummaryTotals.CurrentBudget = sum(state.dataGroceryTodo.map(item => parseFloat(item.Budget)))
    .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
