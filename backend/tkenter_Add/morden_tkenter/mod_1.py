from tkinter import *
import customtkinter
customtkinter.set_appearance_mode("light")
root = customtkinter.CTk()
customtkinter.set_appearance_mode("light")
root.geometry("800x400")

button = customtkinter.CTkButton(master=root, text="ASSSASSIN")

button.place(relx=0.5, rely=0.5, anchor=CENTER)

root.mainloop()