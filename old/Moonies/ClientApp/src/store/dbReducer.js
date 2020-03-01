import { sum } from '../utility/utilities';

const dbReducer = (state, action) => {
  switch (action.type) {
    case 'CATSELECTION':
      let selections = state.Selections;
      selections.SelectedCategoryId = action.payload.id;
      return { ...state, Selections: selections }
    case 'VISIBLE':

      let isVisible = state.visible;
      switch (action.payload.target) {
        case 'AddView':
          isVisible.isAddViewVisible = !isVisible.isAddViewVisible;
          isVisible.isBtnAddViewVisible = !isVisible.isBtnAddViewVisible;

          break;
        case 'CloseAddView':
          isVisible.isAddViewVisible = !isVisible.isAddViewVisible;
          isVisible.isBtnAddViewVisible = !isVisible.isBtnAddViewVisible;
          break;
        case 'AccountsView':
          isVisible.isAccountView = !isVisible.isAccountView;
          break;
        default: break;

      }
      return { ...state, visible: isVisible }
    case 'UPDATEACTSTHEME':
      const selectedTheme = action.payload.theme;
      state.dataTheme.acts_theme = selectedTheme;
      return { ...state }
    case 'THEMEMODE':
      const theme = (action.payload.mode) ? state.dataTheme.dark : state.dataTheme.light;
      state.dataTheme.theme = theme;
      return { ...state }
    case 'UPDATETOTALS':
      Update_CurrentBudget(state);
      Update_TotalBalance(state);
      return { ...state }
    case 'ADD':

      let new_model = action.payload.model;
      new_model.id = state.AvailableFunds_NextId;
      state.AvailableFunds.push(new_model);

      Update_CurrentBudget(state);
      Update_TotalBalance(state);

      return { ...state, AvailableFunds_NextId: new_model.id + 1 }
    case 'UPDATE':

      let updated_model = action.payload;

      let newAvailableFunds = state.AvailableFunds.filter((item) => {
        return item.id !== updated_model.id
      });

      newAvailableFunds.push(updated_model);
      const newstate = { ...state, AvailableFunds: newAvailableFunds };

      Update_CurrentBudget(newstate);
      Update_TotalBalance(newstate);

      return newstate;
    case 'DELETE':

      state.AvailableFunds = state.AvailableFunds.filter(item => item.id !== action.payload.id);
      Update_CurrentBudget(state);
      Update_TotalBalance(state);

      return { ...state }
    default:
      return state;
  }
}
export default dbReducer;





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
