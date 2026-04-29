@AGENTS.md

# Deploy on every change
After completing any code change, always do the following automatically without asking:
1. `git add` the changed files
2. `git commit` with a short descriptive message
3. `git push origin <current-branch>`
4. `gh pr create --base master --head <current-branch> --fill`
5. `gh pr merge --merge --delete-branch`

This pushes the change live to Vercel automatically.
