import ApiService from '../api.service'

export class SubmitError extends Error {
  constructor(statusCode, errors) {
    super(errors)
    this.name = this.constructor.name
    this.statusCode = statusCode
    this.errors = errors
  }
}

export const fetchSignatories = async (id) => {
  const { data } = await ApiService.get(`api/v1/approvers/${id}`)
  return data
}

export const fetchBudgetAccounts = async () => {
  const { data } = await ApiService.get(`api/v1/budget-accounts`)
  return data
}

export const fetchBudgetHeaders = async () => {
  const { data } = await ApiService.get(`api/v1/budget-headers`)
  return data
}

export const fetchBudgetLines = async ({cost_center, budget_header_id, account}) => {
  const { data } = await ApiService.get(`api/v1/budget-lines/${cost_center}/${budget_header_id}/${account}`)
  return data
}

export const fetchProjectApprovers = async (employee_id) => {
  const { data } = await ApiService.get(`api/v1/project-approvers/${employee_id}`)
  return data
}

export const fetchItemIds = async () => {
  const { data } = await ApiService.get(`api/v1/project-authorization/ids`);
  return data
}

export const fetchItems = async () => {
  const { data } = await ApiService.get(`api/v1/project-authorization`);
  return data
}

export const fetchItemById = async (ppaf_number) => {
  const { data } = await ApiService.get(`api/v1/project-authorization/${ppaf_number}`);
  return data
}

export const saveItem = async (params) => {
  try {
    const { data } = await ApiService.post(`api/v1/project-authorization`, params);
    return data
  } 
  catch (e) {
    throw new SubmitError(e.response.status, e.response.data.errors)
  }
}
