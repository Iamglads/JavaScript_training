class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.querySelector("#budget-form");
    this.budgetInput = document.querySelector("#budget-input");
    this.budgetAmount = document.querySelector("#budget-amount");
    this.expenseAmount = document.querySelector("#expense-amount");
    this.balance = document.querySelector("#balance");
    this.balanceAmount = document.querySelector("#balance-amount");
    this.expenseForm = document.querySelector("#expense-form");
    this.expenseInput = document.querySelector("#expense-input");
    this.amountInput = document.querySelector("#amount-input");
    this.expenseList = document.querySelector("#expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  // 
  submitBudgetForm() {
    const inputValue = this.budgetInput.value;

    if (inputValue === "" || value < 0) {
      this.budgetInput.style.border = `1px solid red`;
    } else {
      this.budgetAmount.textContent = inputValue;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }

  //vérifions le solde de la balance
  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if (total < 0) {
      this.balance.classList.remove("ShowGreen", "showBlack");
      this.balance.classList.add("showRed");
    }
    else if (total > 0) {
      this.balance.classList.remove("showred", "showBlack");
      this.balance.classList.add("showGreen");
    }
    else if (total === 0) {
      this.balance.classList.remove("showred", "showBlack");
      this.balance.classList.add('showBlack')
    }
  }

  //submit exepsne 
  submitExpenseForm() {
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    console.log(amountValue);

    if (expenseValue === "" || amountValue === "" || amountValue < 0) {
      this.expenseFeedback.classList.add("showItem");
      this.expenseFeedback.innerHTML = "<p> Ajoutez une valeur </p>";
      const self = this;
      setTimeout( () => {
        self.expenseFeedback.classList.remove("showItem")
      }, 3000);
    }
    else {
      let amount = parseInt(amountValue);
      this.expenseInput.value = "";
      this.amountInput.value = "";
      let expense = {
        id: this.itemID,
        title: expenseValue,
        amount: amount
      };
      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      this.showBlance();
    }

  }

  // addExpense

  addExpense(expense) {
    const div = document.createElement("div");
    div.classList.add("expense");
    div.innerHTML = `
      <div>
        <h6>- ${expense.title}</h6>
        <h5>${expense.amount}</h5>
        <!-- icons -->
        <div class="expense-icons list-item">
            <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
              <i class="fas fa-edit"></i>
            </a>
            <a href="#" class="delete-icon" data-id="${expense.id}">
              <i class="fas fa-trash"></i>
            </a>
        </div>
      </div>`;
    this.expenseList.appendChild("div");
  }


  totalExpense() {
    let total = 0;
    if (this.itemList.length > 0) {
      total = this.itemList.reduce( (acc, curr) => {
        acc += curr.amount;
        return acc;
      }, 0);
    }
    this.expenseAmount.textContent = total;
    return total;
  }

  //edit expense
  editExpense(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    this.expenseList.removeChild(parent);
    let expense = this.itemList.filter( (item) => {
      return item.id === id;
    });
    //show value

    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;
    //delete item
    let tempList = this.itemList.filter( (expense) => {
      return expense.id !== id;
    });
  }

  // delete Expense 
  deleteExpense(element) {
    let id = parseInt(element.dataset.id);
    console.log(id);
    let parent = element.parentElement.parentElement.parentElement;

    //remove from dom
    this.expenseList.removeChild(parent);
    //delete item 
    let tempList = this.itemList.filter( (expense) => {
      return expense.id !== id;
    });
    this.itemList = tempList;
    this.showBlance();

  }

}

//Ecoutons nos évenements 

function eventListeners() {
  const budgetForm = document.querySelector("#budget-form");
  const expenseForm = document.querySelector("#expense-Form");
  const expenseList = document.querySelector("#expense-list");
  
  // new instance of UI class
  const ui = new UI();

  //budget form submit from;
  budgetForm.addEventListener("submit", event => {
    event.preventDefault();
    ui.submitBudgetForm();
  });
  expenseForm; addEventListener("submit",  event => {
    event.preventDefault();
    ui.submitExpenseForm();
  });
  expenseList.addEventListener("click", () => {
    if (event.target.parentElement.classList.contains("edit-icon")) {
      ui.editExpense(event.target.parentElement);
    } else if (event.target.parentElement.classList.contains("delete-icon")) {
      ui.deleteExpense(event.target.parentElement);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});
