// "use client";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useEffect } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { Checkbox } from "@/components/ui/checkbox";
// import type { User } from "./user-columns";
// import api from "@/lib/api";
// import { toast } from "sonner";

// const roles = ["ROLE_PUBLIC", "ROLE_TRIAL_USER", "ROLE_USER", "ROLE_ADMIN"];

// const userFormSchema = z.object({
//     firstName: z.string().min(1, "First name is required"),
//     lastName: z.string().min(1, "Last name is required"),
//     email: z.string().email(),
//     roles: z.array(z.string()).min(1, "User must have at least one role"),
//     enabled: z.boolean(),
// });

// type UserFormValues = z.infer<typeof userFormSchema>;

// interface UserEditModalProps {
//     isOpen: boolean;
//     setIsOpen: (isOpen: boolean) => void;
//     user: User | null;
//     onSuccess: () => void;
// }

// export function UserEditModal({ isOpen, setIsOpen, user, onSuccess }: UserEditModalProps) {
//     const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = useForm<UserFormValues>({
//         resolver: zodResolver(userFormSchema),
//     });

//     useEffect(() => { if (user) {  reset({
//                 email: user.email,
//                 firstName: user.firstName ?? "", // The '??' is the nullish coalescing operator
//                 lastName: user.lastName ?? "",
//                 roles: user.roles,
//                 enabled: user.enabled,
//             }); 
//         } 
//     }, [user, reset]);

//     const onSubmit = async (data: UserFormValues) => {
//         const promise = api.put(`/api/admin/users/${user!.id}`, data);
//         toast.promise(promise, {
//             loading: "Updating user...",
//             success: () => { onSuccess(); setIsOpen(false); return "User updated successfully."; },
//             error: "Failed to update user.",
//         });
//     };

//     return (
//         <Dialog open={isOpen} onOpenChange={setIsOpen}>
//             <DialogContent className="bg-black border-neutral-800">
//                 <DialogHeader>
//                     <DialogTitle>Edit User: {user?.email}</DialogTitle>
//                     <DialogDescription>Modify user details, roles, and status.</DialogDescription>
//                 </DialogHeader>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div><Label>First Name</Label><Input {...register("firstName")} />{errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}</div>
//                         <div><Label>Last Name</Label><Input {...register("lastName")} />{errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}</div>
//                     </div>
//                     <div><Label>Email</Label><Input type="email" {...register("email")} />{errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}</div>
//                     <div>
//                         <Label>Roles</Label>
//                         <Controller control={control} name="roles"
//                             render={({ field }) => (
//                                 <div className="space-y-2 rounded-md border border-neutral-700 p-2">
//                                     {roles.map((role) => (
//                                         <div key={role} className="flex items-center space-x-2">
//                                             <Checkbox id={role} checked={field.value?.includes(role)}
//                                                 onCheckedChange={(checked) => {
//                                                     const newRoles = checked ? [...field.value, role] : field.value?.filter((r) => r !== role);
//                                                     field.onChange(newRoles);
//                                                 }} />
//                                             <Label htmlFor={role}>{role.replace("ROLE_", "")}</Label>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )} />
//                          {errors.roles && <p className="text-red-500 text-xs">{errors.roles.message}</p>}
//                     </div>
//                     <div className="flex items-center justify-between rounded-lg border border-neutral-700 p-3">
//                         <Label>Account Status</Label>
//                         <Controller control={control} name="enabled"
//                             render={({ field }) => (
//                                 <div className="flex items-center gap-2">
//                                      <span className={field.value ? "text-green-400" : "text-red-400"}>{field.value ? "Active" : "Deactivated"}</span>
//                                     <Switch checked={field.value} onCheckedChange={field.onChange} />
//                                 </div>
//                             )} />
//                     </div>
//                     <Button type="submit" disabled={isSubmitting} className="w-full">Save Changes</Button>
//                 </form>
//             </DialogContent>
//         </Dialog>
//     );
// }